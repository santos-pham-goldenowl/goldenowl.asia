import React, { useState } from "react";
import { Link } from "react-router-dom";

import arrowDown from "../../assets/images/chevron-down-solid.svg";
import closeIcon from "../../assets/images/whitecloseicon.png";
import ArrowRight from "../ArrowRight";

const MobileMenu = () => {
  const [state, setState] = useState(false);

  const toggleMenuState = () => setState(!state);

  return (
    <div>
      {/* Menu button */}
      <div className={`${state ? "d-none " : ""}main-header__hamburger`} onClick={toggleMenuState}>
        <span />
        <span />
        <span />
      </div>
      {/* Menu content */}
      <div className={`${state ? "" : "d-none "}mobile-menu`}>
        <div className="mobile-menu__header">
            <img src={closeIcon} className="mobile-menu__close" onClick={toggleMenuState} />
        </div>
        <div className="mobile-menu__content">
            <div className="mobile-menu__primary-link">
                <Link className="d-flex" to="/">Home</Link>
                <Link className="d-flex align-items-center" to="/services">
                    Services
                    <img className="ml-auto" src={arrowDown} alt="service" />
                </Link>
                <Link className="d-flex" to="/technologies">Technology</Link>
                <Link className="d-flex" to="/testimonial">Testimonials</Link>
            </div>
            <div className="mobile-menu__secondary-link">
                <Link className="d-flex" to="/about-us">About Golden Owl</Link>
                <Link className="d-flex" to="/blog">Blog</Link>
                <Link className="d-flex" to="/portfolio">Portfolio</Link>
            </div>
            <Link className="d-flex align-items-center contact-link" to="/contact-us">
                Contact us
                <ArrowRight className="mobile-menu__arrow" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
