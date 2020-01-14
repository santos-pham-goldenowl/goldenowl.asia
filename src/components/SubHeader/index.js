import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../SubHeaderServices/index';
import ArrowRight from '../ArrowRight/index';
import './index.sass';

const SubHeader = () => (
  <header className="sub-header">
    <div className="sub-header__title">
      <Link to="/">
        <h4 className="sub-header__text">Home</h4>
      </Link>
    </div>
    <Services />
    <div className="sub-header__title">
      <Link to="/technology">
        <h4 className="sub-header__text">Technology</h4>
      </Link>
    </div>
    <div className="sub-header__title">
      <h4 className="sub-header__text">Testimonial</h4>
    </div>
    <div className="sub-header__contact-wrapper">
      <h4 className="sub-header__contact-title sub-header__text">Contact us</h4>
      <ArrowRight width="20px" left="21px" />
    </div>
  </header>
);

export default SubHeader;
