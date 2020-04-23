import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../components/ScrollToTop';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';
import ServicesSubPage from '../ServicesSubPage';
import Technology from '../Technology';
import PortfolioSubPage from '../PortfolioSubPage';
import Testimonials from '../Testimonials';
import Portfolio from '../Portfolio';
import FAQ from '../FAQ';
import Blog from '../Blog';
import Career from '../Career';
import CareerDetails from '../CareerDetails';
import NotFound from '../NotFound';

import objectToArray from '../../utils/objectToArray';
import portfolioDetails from '../../utils/portfolioDetails';
import singleServiceDetails from '../../utils/singleServiceDetails';
import mockCareersData from '../../utils/mockCareersData';

import './index.sass';

// Fix `window is not defined` when run on SSR
if (typeof (window) === 'undefined') {
  global.window = {};
}

const App = () => (
  <>
    <ScrollToTop />
    <section id="app" className="App">
      <Switch>
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
        <Route exact path="/careers" component={Career} />
        {
          objectToArray(mockCareersData).map((career) => (
            <Route
              exact
              key={career.key}
              path={`/careers/${career.url}`}
              component={() => <CareerDetails content={career} />}
            />
          ))
        }
        <Route exact path="/faq" component={FAQ} />
        <Route path="*" component={NotFound} />
      </Switch>
    </section>
  </>
);

export default App;
