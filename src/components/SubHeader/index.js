import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../SubHeaderServices/index';
import Technology from '../SubHeaderTechnology/index';
import ArrowRight from '../ArrowRight/index';
import './index.sass';

const SubHeader = () => {
  return (
    <header className="sub-header">
      <div className="sub-header__title">
        <Link to="/">
          <h4>Home</h4>
        </Link>
      </div>
      <Services />
      <Technology />
      <div className="sub-header__title">
        <h4>Testimonial</h4>
      </div>
      <div className="sub-header__contact-wrapper">
        <h4 className="sub-header__contact-title">Contact us</h4>
        <ArrowRight width="20px" left="21px" />
      </div>
    </header>
  );
}

export default SubHeader;
