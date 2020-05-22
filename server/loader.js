/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

// Express requirements
import path from 'path';
import fs from 'fs';

// React requirements
import React from 'react';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToStaticNodeStream } from 'react-dom/server';

// Our store, entrypoint, and manifest
import createStore from '../src/store';
import App from '../src/pages/App';

// LOADER
export default (req, res) => {
  /*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - SEO meta tags
      - Preloaded state (for Redux) depending on the current route
      - Code-split script tags depending on the current route
  */
  const injectHTML = (data, {
    html, title, meta, body, state,
  }) => {
    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}</head>`);
    data = data.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`,
    );

    return data;
  };

  // Load in our HTML file from our build
  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    (err, htmlData) => {
      // If there's an error... serve up something nasty
      if (err) {
        console.error('Read error', err);
        return res.status(404).end();
      }

      // Create a store (with a memory history) from our current url
      const { store } = createStore(req.url);
      const context = {};

      /*
        Here's the core funtionality of this file. We do the following in specific order (inside-out):
          1. Load the <App /> component
          2. Inside of a Redux <StaticRouter /> (since we're on the server), given a location and context to write to
          3. Inside of the store provider
          4. Inside of the React Loadable HOC to make sure we have the right scripts depending on page
          5. Render all of this sexiness
          6. Make sure that when rendering Frontload knows to get all the appropriate preloaded requests

        In English, we basically need to know what page we're dealing with, and then load all the appropriate scripts and
        data for that page. We take all that information and compute the appropriate state to send to the user. This is
        then loaded into the correct components and sent as a Promise to be handled below.
      */
      const htmlBody = renderToStaticNodeStream(
        <Loadable.Capture>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        </Loadable.Capture>,
      );

      // We need to tell Helmet to compute the right meta tags, title, and such
      const helmet = Helmet.renderStatic();

      // NOTE: Disable if you desire
      // Let's output the title, just to see SSR is working as intended
      console.log('THE TITLE', helmet.title.toString());

      // Pass all this nonsense into our HTML formatting function above
      const html = injectHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        body: htmlBody,
        state: JSON.stringify(store.getState()).replace(/</g, '\\u003c'),
      });

      // We have all the final HTML, let's send it to the user already!
      res.send(html);
    },
  );
};
