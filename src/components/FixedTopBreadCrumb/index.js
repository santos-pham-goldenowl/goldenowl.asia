import React from 'react';
import { Link } from 'react-router-dom';

import ReadingProgress from '../ReadingProgress';

import home from '../../assets/images/home-icon.png';
import './index.sass';

const FixedTopBreadCrumb = ({ children, pageContent }) => (
  <section id="fixed-top-breadcrumb" className="fixed-breadcrumb fixed-top d-none">
    <div className="fixed-breadcrumb__content">
      <Link to="/">
        <div>
          <img src={home} alt="home" loading="lazy" />
          {children && <span>/</span>}
        </div>
      </Link>
      <div className="fixed-breadcrumb__text">{children}</div>
    </div>
    <ReadingProgress target={pageContent} />
  </section>
);

export default FixedTopBreadCrumb;
