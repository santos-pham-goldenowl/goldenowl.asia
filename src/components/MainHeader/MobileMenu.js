import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import arrowDown from "../../assets/images/chevron-down-solid.svg";
import closeIcon from "../../assets/images/whitecloseicon.png";
import backIcon from "../../assets/images/whitebackicon.png";
import ArrowRight from "../ArrowRight";

const MobileMenu = () => {
  const [state, setState] = useState(false);
  const [subMenuState, setSubMenuState] = useState(false);

  const toggleMenuState = () => {
    setState(!state);
  };

  const toggleSubMenuState = () => {
    setSubMenuState(!subMenuState);
  };

  useEffect(() => {
    document.body.style.overflowY = state ? "hidden" : "auto";
  }, [state]);

  return (
    <div id="mobile-menu">
      {/* Menu button */}
      <div
        className={`${state ? "d-none " : ""}main-header__hamburger`}
        onClick={toggleMenuState}
      >
        <span />
        <span />
        <span />
      </div>
      {/* Menu content */}
      <div className={`${state ? "" : "d-none "}mobile-menu`}>
        <div className="mobile-menu__header">
          <img
            src={closeIcon}
            alt="close-menu"
            className="mobile-menu__close"
            onClick={toggleMenuState}
          />
        </div>
        <div className="mobile-menu__content">
          <div className="mobile-menu__primary-link">
            <Link className="d-flex" to="/">
              Home
            </Link>
            <div className="d-flex">
              <Link to="/services">Services</Link>
              <img
                className="ml-auto"
                src={arrowDown}
                alt="service"
                onClick={toggleSubMenuState}
              />
            </div>
            <Link className="d-flex" to="/technologies">
              Technology
            </Link>
            <Link className="d-flex" to="/testimonial">
              Testimonials
            </Link>
          </div>
          <div className="mobile-menu__secondary-link">
            <Link className="d-flex" to="/about-us">
              About Golden Owl
            </Link>
            <Link className="d-flex" to="/blog">
              Blog
            </Link>
            <Link className="d-flex" to="/portfolio">
              Portfolio
            </Link>
          </div>
          <Link
            className="d-flex align-items-center contact-link"
            to="/contact-us"
          >
            Contact us
            <ArrowRight className="mobile-menu__arrow" />
          </Link>
        </div>
      </div>
      {/* Sub-Menu content */}
      <div className={`${subMenuState ? "" : "d-none "}mobile-menu sub-menu`}>
        <div className="mobile-menu__header">
          <div className="mobile-menu__back d-flex" onClick={toggleSubMenuState}>
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
            <Link to="/services/web-development">
              Web development
              <p className="mobile-menu__item-description">
                Lorem ipsum dolor sit amet, te albucius
              </p>
            </Link>
            <Link to="/services/mobile-development">
              Mobile development
              <p className="mobile-menu__item-description">
                Lorem ipsum dolor sit amet, te albucius
              </p>
            </Link>
            <Link to="/services/ux-ui-design">
              UX UI design
              <p className="mobile-menu__item-description">
                Lorem ipsum dolor sit amet, te albucius
              </p>
            </Link>
            <Link to="/services/project-management">
              Project management
              <p className="mobile-menu__item-description">
                Lorem ipsum dolor sit amet, te albucius
              </p>
            </Link>
            <Link to="/services/development-team">
              Development team
              <p className="mobile-menu__item-description">
                Lorem ipsum dolor sit amet, te albucius
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
