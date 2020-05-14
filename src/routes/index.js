import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ServicesSubPage from "../pages/ServicesSubPage";
import Technology from "../pages/Technology";
import PortfolioSubPage from "../pages/PortfolioSubPage";
import Testimonials from "../pages/Testimonials";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Career from "../pages/Career";
import CareerDetails from "../pages/CareerDetails";
import FAQ from "../pages/FAQ";
import NotFound from "../pages/NotFound";

import objectToArray from "../utils/objectToArray";
import portfolioDetails from "../utils/portfolioDetails";
import singleServiceDetails from "../utils/singleServiceDetails";
import mockCareersData from "../utils/mockCareersData";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/technologies" component={Technology} />
          <Route exact path="/testimonial" component={Testimonials} />
          <Route exact path="/portfolio" component={Portfolio} />
          {objectToArray(portfolioDetails).map((portfolio) => (
            <Route
              exact
              key={portfolio.key}
              path={`/portfolio/${portfolio.url}`}
              component={() => <PortfolioSubPage content={portfolio} />}
            />
          ))}
          <Route path="/blog" component={Blog} />
          <Route path="/contact-us" component={Contact} />
          <Route exact path="/services" component={Services} />
          {objectToArray(singleServiceDetails).map((service) => (
            <Route
              exact
              key={service.key}
              path={`/services/${service.url}`}
              component={() => <ServicesSubPage content={service} />}
            />
          ))}
          <Route exact path="/careers" component={Career} />
          {objectToArray(mockCareersData).map((career) => (
            <Route
              exact
              key={career.key}
              path={`/careers/${career.url}`}
              component={() => <CareerDetails content={career} />}
            />
          ))}
          <Route exact path="/faq" component={FAQ} />
          <Route path="*" component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;
