import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/images/home-icon.svg';
import ReadingProgress from '../ReadingProgress';

import './index.sass';

const BreadCrumb = ({ ref, children, pageContent }) => (
  <section id="breadcrumb" ref={ref} className="breadcrumb">
    <div className="breadcrumb__content">
      <Link to="/">
        <div className="d-flex align-items-center">
          <img src={home} alt="home" loading="lazy" />
          <span>/</span>
        </div>
      </Link>
      <div className="breadcrumb__text">{children}</div>
    </div>
    <ReadingProgress target={pageContent} />
  </section>
);

export default BreadCrumb;
