/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from '../ArrowRight';
import ServicesData from '../../utils/servicesMenuContent';

import mobileMenuLogo from '../../assets/images/mobileMenuLogo.png';
import arrowDown from '../../assets/images/servicesArrowDown.png';
import closeIcon from '../../assets/images/whitecloseicon.png';
import backIcon from '../../assets/images/whitebackicon.png';

const MobileMenu = () => {
  const [state, setState] = useState(false);
  const [subMenuState, setSubMenuState] = useState(false);

  const toggleMenuState = () => {
    setState(!state);
  };

  const toggleSubMenuState = () => {
    setSubMenuState(!subMenuState);
  };

  const closeAllMenu = (location) => {
    if (location === window.location.pathname) {
      window.location.reload();
    }
  };

  useEffect(() => {
    document.body.style.overflowY = state ? 'hidden' : 'auto';
  }, [state]);

  return (
    <div id="mobile-menu">
      {/* Menu button */}
      <div
        className={`${state ? 'd-none ' : ''}main-header__hamburger`}
        onClick={toggleMenuState}
      >
        <span />
        <span />
        <span />
      </div>
      {/* Menu content */}
      <div className={`${state ? 'mobile-menu-open ' : ''}mobile-menu`}>
        <div className="mobile-menu__header">
          <img
            src={mobileMenuLogo}
            alt="GO-mobile-logo"
            className="mobile-menu__logo"
          />
          <img
            src={closeIcon}
            alt="close-menu"
            className="mobile-menu__close"
            onClick={toggleMenuState}
          />
        </div>
        <div className="mobile-menu__content">
          <div className="mobile-menu__primary-link">
            <Link onClick={() => closeAllMenu('/')} className="d-flex" to="/">
              Home
            </Link>
            <div className="d-flex">
              <Link onClick={() => closeAllMenu('/services')} to="/services">
                Services
              </Link>
              <img
                className="ml-auto"
                src={arrowDown}
                alt="service"
                onClick={toggleSubMenuState}
              />
            </div>
            <Link
              onClick={() => closeAllMenu('/technologies')}
              className="d-flex"
              to="/technologies"
            >
              Technology
            </Link>
            <Link
              onClick={() => closeAllMenu('/testimonial')}
              className="d-flex"
              to="/testimonial"
            >
              Testimonials
            </Link>
          </div>
          <div className="mobile-menu__secondary-link">
            <Link
              onClick={() => closeAllMenu('/about-us')}
              className="d-flex"
              to="/about-us"
            >
              About Golden Owl
            </Link>
            <Link
              onClick={() => {
                closeAllMenu('/blog');
              }}
              className="d-flex"
              to="/blog"
              target="_blank"
            >
              Blog
            </Link>
            <Link
              onClick={() => {
                closeAllMenu('/portfolio');
              }}
              className="d-flex"
              to="/portfolio"
              target="_blank"
            >
              Portfolio
            </Link>
            <Link
              onClick={() => {
                closeAllMenu('/careers');
              }}
              className="d-flex"
              to="/careers"
            >
              Careers
            </Link>
          </div>
          <Link
            onClick={() => closeAllMenu('/contact-us')}
            className="d-flex align-items-center contact-link"
            to="/contact-us"
          >
            Contact us
            <ArrowRight className="mobile-menu__arrow" />
          </Link>
        </div>
      </div>
      {/* Sub-Menu content */}
      <div
        className={`${
          subMenuState ? 'mobile-menu-open ' : ''
        }mobile-menu sub-menu`}
      >
        <div className="mobile-menu__header">
          <div
            className="mobile-menu__back d-flex"
            onClick={toggleSubMenuState}
          >
            <img src={backIcon} className="d-inline-block" alt="back-menu" />
            <h3>Services</h3>
          </div>
          <img
            src={closeIcon}
            alt="close-menu"
            className="mobile-menu__close"
            onClick={toggleSubMenuState}
          />
        </div>
        <div className="mobile-menu__content">
          <div className="mobile-menu__primary-link">
            {ServicesData.map((item, idx) => (
              <Link
                key={idx}
                onClick={() => closeAllMenu(`/services/${item.link}`)}
                to={`/services/${item.link}`}
              >
                {item.name}
                <p className="mobile-menu__item-description">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
