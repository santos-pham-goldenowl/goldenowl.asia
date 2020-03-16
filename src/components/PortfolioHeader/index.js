import React from "react";

import logo from "../../assets/images/go.png";
import companyName from "../../assets/images/golden_owl_text.png";
import "./index.sass";
import { Link } from "react-router-dom";

const Services = () => (
  <header className="portfolio-header d-flex">
    <Link to="/">
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
      <p className="portfolio-header__email">admin@goldenowl.asia</p>
    </div>
  </header>
);

export default Services;
