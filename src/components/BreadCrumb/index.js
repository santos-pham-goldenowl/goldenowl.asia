import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/home-icon.png';
import './index.sass';

const BreadCrumb = (props) => {
  return (
    <section className="home-back">
      <div>
        <Link to="/">
          <div>
            <img src={home} alt="home" loading="lazy" />
            <span>/</span>
          </div>
        </Link>
        <div className="home-back__text">{props.children}</div>
      </div>
    </section>
  );
}

export default BreadCrumb;
