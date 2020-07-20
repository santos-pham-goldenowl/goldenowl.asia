import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { render, hydrate } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import offlinePlugin from 'offline-plugin/runtime';

import App from './pages/App';
import createStore from './store';
import * as serviceWorker from './serviceWorker';


const { store, history } = createStore();

const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const root = document.getElementById('root');

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}

offlinePlugin.install({
  onUpdating: () => { },
  onUpdateReady: () => {
    // Tells to new SW to take control immediately
    offlinePlugin.applyUpdate();
  },
  onUpdated: () => {
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => { },
});

serviceWorker.register();
