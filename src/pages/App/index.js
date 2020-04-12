import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';
import ServicesSubPage from '../ServicesSubPage';
import TechnologyContainer from '../Technology';
import PortfolioSubPage from '../PortfolioSubPage';
import Testimonials from '../Testimonials';
import Portfolio from '../Portfolio';
import Blog from '../Blog';

import ScrollToTop from '../../components/ScrollToTop';

import objectToArray from '../../utils/objectToArray';
import portfolioDetails from '../../utils/portfolioDetails';
import singleServiceDetails from '../../utils/singleServiceDetails';

import './index.sass';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <section id="app" className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/technologies" component={TechnologyContainer} />
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
  </BrowserRouter>
);

export default App;
