import React from 'react';
import { Switch, Route } from 'react-router-dom';

import portfolioDetails from './utils/portfolioDetails';
import singleServiceDetails from './utils/singleServiceDetails';
import mockCareersData from './utils/mockCareersData';
import objectToArray from '../../src/utils/objectToArray';

export default (
  <Switch>
    <Route path="/" />
    <Route path="/about-us" />
    <Route path="/technologies" />
    <Route path="/testimonial" />
    <Route path="/portfolio" />
    {
      objectToArray(portfolioDetails).map((portfolio) => (
        <Route
          key={portfolio.key}
          path={`/portfolio/${portfolio.url}`}
        />
      ))
    }
    <Route path="/blog" />
    <Route path="/contact-us" />
    <Route path="/services" />
    {
      objectToArray(singleServiceDetails).map((service) => (
        <Route
          key={service.key}
          path={`/services/${service.url}`}
        />
      ))
    }
    <Route path="/careers" />
    {
      objectToArray(mockCareersData).map((career) => (
        <Route
          key={career.key}
          path={`/careers/${career.url}`}
        />
      ))
    }
    <Route path="/faq" />
    <Route path="" />
  </Switch>
);