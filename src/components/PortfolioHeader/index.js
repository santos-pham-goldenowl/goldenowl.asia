import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/go.png';
import companyName from '../../assets/images/golden_owl_text.png';

import './index.sass';

const Services = () => (
  <header className="portfolio-header d-flex align-items-center">
    <Link to="/portfolio">
      <div className="d-flex">
        <img className="portfolio-header__logo" src={logo} alt="go-logo" />
        <div className="portfolio-header__logo-text flex-column">
          <img src={companyName} alt="go" />
          <p className="mt-auto">Portfolio</p>
        </div>
      </div>
    </Link>
    <div className="ml-auto">
      <p>We are glad to connect —</p>
      <a href="mailto:hello@goldenowl.asia">
        <p className="portfolio-header__email">hello@goldenowl.asia</p>
      </a>
    </div>
  </header>
);

export default Services;
