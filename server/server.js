// Express requirements
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import Loadable from 'react-loadable';
import cookieParser from 'cookie-parser';
import sgMail from '@sendgrid/mail';
import multer from 'multer';
import fs from 'fs';
import loader from './loader';

const upload = multer({ dest: 'uploads/' });

require('dotenv').config();

// Sendgrid init with api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;
const axiosInstance = require('axios').default;

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));

app.use(
  express.Router().get('/get-blogs', (req, res) => {
    const { size = 10, page = 1 } = req.query;

    axiosInstance
      .get(`${process.env.API_URL}/posts?size=${size}&page=${page}`)
      .then((response) => res.status(200).json({
        data: response.data,
      }))
      .catch((error) => res.status(404).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express.Router().get('/get-list-blog-by-category', (req, res) => {
    const { size = 10, id, page = 1 } = req.query;

    axiosInstance
      .get(
        `${process.env.API_URL}/post-categories/${id}/filter-post-by-category?size=${size}&page=${page}`,
      )
      .then((response) => res.status(200).json({
        data: response.data,
      }))
      .catch((error) => res.status(404).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express.Router().get('/get-list-blog-category', (req, res) => {
    axiosInstance
      .get(`${process.env.API_URL}/post-categories/category-list`)
      .then((response) => res.status(200).json({
        data: response.data,
      }))
      .catch((error) => res.status(404).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express.Router().get('/get-blog', (req, res) => {
    const { slug } = req.query;

    const getDetails = axiosInstance.get(`${process.env.API_URL}/posts/${slug}`);
    const getRelated = axiosInstance.get(
      `${process.env.API_URL}/posts/${slug}/related-posts`,
    );

    axiosInstance
      .all([getDetails, getRelated])
      .then(
        axiosInstance.spread((...response) => {
          const detailsResponse = response[0];
          const relatedResponse = response[1];

          res
            .status(200)
            .json({ data: detailsResponse.data, related: relatedResponse.data });
        }),
      )
      .catch((error) => res.status(500).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express.Router().get('/search-list-blog', (req, res) => {
    const { size = 10, search, page = 1 } = req.query;

    axiosInstance
      .get(
        `${process.env.API_URL}/posts?search=${search}&size=${size}&page=${page}`,
      )
      .then((response) => res.status(200).json({
        data: response.data,
      }))
      .catch((error) => res.status(404).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express.Router().get('/get-careers', (req, res) => {
    axiosInstance
      .get(`${process.env.API_URL}/careers`)
      .then((response) => res.status(200).json({ data: response.data }))
      .catch((error) => res.status(404).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express.Router().get('/get-career', (req, res) => {
    const { slug } = req.query;

    axiosInstance
      .get(`${process.env.API_URL}/careers/${slug}`)
      .then((response) => res.status(200).json({ data: response.data }))
      .catch((error) => res.status(404).json({
        error: true,
        message: `Error: ${error}`,
      }));
  }),
);

app.use(
  express
    .Router()
    .post('/submit-application', upload.single('cvFile'), (req, res) => {
      const { body, file } = req;
      const { fullName, email, job } = body;

      fs.readFile(file.path, (err, data) => {
        const msg = {
          to: process.env.HR_ADDRESS,
          from: process.env.FROM_ADDRESS,
          subject: `From [GO Website]: Application for ${job} position`,
          html: `<head>
              <style>
                  body {font-family: "Roboto";}
                  h3 {color: #0096ff;}
                  p {font-size: 15px;}
                  em {color: #4cb5ff;}
                  u {color: #4cb5ff;}
                  b {color: #4cb5ff;}
                  a {color:#4cb5ff;}
                  span {color: #4cb5ff; font-weight: bold;}
                  .message-section em {font-style: italic;}
                  .candidate-info { font-style: italic; font-weight: bold; }
                  .candidate-info span {color: #4cb5ff; font-weight: normal;}
              </style>
            </head>
            <body>
              <h3>Hi Admin,</h3>
              <p class="opening">
                A candidate whose name is&nbsp;${`${fullName}`}&nbsp;sent you a job application.
              </p>
              <p class="candidate-info"><u>Candidate's email:</u>&nbsp;${email}</p>
            </body>`,
          attachments: [
            {
              filename: `${fullName}-CV.pdf`,
              type: 'application/pdf',
              disposition: 'attachment',
              content: data.toString('base64'),
              content_id: 'cvfile',
            },
          ],
        };
        sgMail.send(msg).then(
          () => {
            fs.unlinkSync(file.path);
            res.status(200).json({
              message: 'Message sent!',
            });
          },
          (error) => {
            res.status(403).json({
              error: true,
              message: `Error: ${err || error}`,
            });
          },
        );
      });
    }),
);

app.use(
  express.Router().post('/subscribe', (req, res) => {
    const { body } = req;
    const { email, type } = body;

    const name = email.split('@')[0];

    axiosInstance
      .post(`${process.env.API_URL}/subscriptions`, {
        name,
        email,
        subscription_type: type,
      })
      .then((response) => {
        if (response) {
          res.status(200).json({
            data: {
              success: true,
              message: 'Submitted!',
            },
          });
        }
      })
      .catch((err) => res.status(404).json({
        data: {
          error: true,
          message: `Error: ${err}`,
        },
      }));
  }),
);

app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}`));
});

// Handle the bugs somehow
app.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
