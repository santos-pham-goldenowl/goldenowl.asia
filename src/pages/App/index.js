import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import ScrollToTop from '../../components/ScrollToTop';

import objectToArray from '../../utils/objectToArray';
import portfolioDetails from '../../utils/portfolioDetails';
import singleServiceDetails from '../../utils/singleServiceDetails';

import './index.sass';

// Fix `window is not defined` when run on SSR
if (typeof (window) === 'undefined') {
  global.window = {};
}

const Home = Loadable({
  loader: () => import('../Home'),
  loading: () => null,
});

const About = Loadable({
  loader: () => import('../About'),
  loading: () => null,
});

const Contact = Loadable({
  loader: () => import('../Contact'),
  loading: () => null,
});

const Services = Loadable({
  loader: () => import('../Services'),
  loading: () => null,
});

const ServicesSubPage = Loadable({
  loader: () => import('../ServicesSubPage'),
  loading: () => null,
});

const Technology = Loadable({
  loader: () => import('../Technology'),
  loading: () => null,
});

const PortfolioSubPage = Loadable({
  loader: () => import('../PortfolioSubPage'),
  loading: () => null,
});

const Testimonials = Loadable({
  loader: () => import('../Testimonials'),
  loading: () => null,
});

const Portfolio = Loadable({
  loader: () => import('../Portfolio'),
  loading: () => null,
});

const Blog = Loadable({
  loader: () => import('../Blog'),
  loading: () => null,
});

const App = () => (
  <>
    <ScrollToTop />
    <section id="app" className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/technologies" component={Technology} />
      <Route exact path="/testimonial" component={Testimonials} />
      <Route exact path="/portfolio" component={Portfolio} />
      {
        objectToArray(portfolioDetails).map((portfolio) => (
          <Route
            exact
            key={portfolio.key}
            path={`/portfolio/${portfolio.url}`}
            component={() => <PortfolioSubPage content={portfolio} />}
          />
        ))
      }
      <Route path="/blog" component={Blog} />
      <Route path="/contact-us" component={Contact} />
      <Route exact path="/services" component={Services} />
      {
        objectToArray(singleServiceDetails).map((service) => (
          <Route
            exact
            key={service.key}
            path={`/services/${service.url}`}
            component={() => <ServicesSubPage content={service} />}
          />
        ))
      }
    </section>
  </>
);

export default App;
