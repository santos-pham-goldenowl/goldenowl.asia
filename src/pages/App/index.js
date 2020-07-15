import React from 'react';

import ScrollToTop from '../../components/ScrollToTop';
import AppRoutes from '../../routes';

import './index.sass';

// Fix `window is not defined` when run on SSR
if (typeof (window) === 'undefined') {
  global.window = {};
}

const App = () => (
  <>
    <ScrollToTop />
    <section id="app" className="App">
      <AppRoutes />
    </section>
  </>
);

export default App;
