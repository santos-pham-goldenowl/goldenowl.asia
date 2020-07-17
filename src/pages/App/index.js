import React, { useEffect } from 'react';
import AOS from 'aos';

import ScrollToTop from '../../components/ScrollToTop';
import AppRoutes from '../../routes';

import 'aos/dist/aos.css';
import './index.sass';

// Fix `window is not defined` when run on SSR
if (typeof (window) === 'undefined') {
  global.window = {};
}

const App = () => {
  /**
   * Server-side rendering does not provide the 'document' object
   * therefore these is required either in useEffect or componentDidMount as they
   * are exclusively executed on a client
   */
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      anchorPlacement: 'center-bottom',
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <ScrollToTop />
      <section id="app" className="App">
        <AppRoutes />
      </section>
    </>
  );
};

export default App;
