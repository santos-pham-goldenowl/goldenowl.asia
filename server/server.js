// Express requirements
import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";
import Loadable from "react-loadable";
import cookieParser from "cookie-parser";
const cors = require("cors");
require('dotenv').config();

// Our loader - this basically acts as the entry point for each page load
import loader from "./loader";

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

// Send email
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get("/", loader));
app.use(express.static(path.resolve(__dirname, "../build")));

app.use(express.Router().post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNum, company, country, subject, message: goMessage } = req.body;

  const msg = {
    to: "stephanyhcm.go@gmail.com",
    from: "austin@goldenowl.asia",
    subject: `From [GO Website]: ${subject}`,
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
                .client-info { font-style: italic; font-weight: bold; }
                .client-info span {color: #4cb5ff; font-weight: normal;}
            </style>
          </head>          
          <body>
            <h3>Hi Admin,</h3>
            <p class="opening">A visitor whose name is&nbsp;${`${firstName} ${lastName}`}&nbsp;sent you a message with the
                following content:</p>
                <p class="message-section">&nbsp;&nbsp;<em>${goMessage}</em></p>
                <p class="client-info">${company},&nbsp;${country}</p>
                <p class="client-info"><u>Visitor's email:</u>&nbsp;${email}</p>
                <p class="client-info"><u>Visitor's phone number:</u>&nbsp;${phoneNum}</p>
          </body>`,
  };

  sgMail.send(msg).then(
    () => {
      res.json({
        message: "Message sent!"
      })
    },
    (error) => {
      res.json({
        error: true,
        message: `Error: ${error}`,
      });
    }
  );
}));

app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}`));
});

// Handle the bugs somehow
app.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof PORT === "string" ? `Pipe ${PORT}` : `Port ${PORT}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
