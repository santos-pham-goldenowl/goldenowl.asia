import React from 'react';
import { Link } from 'react-router-dom';

import socialIcons from '../../utils/socialIcons';

import go from '../../assets/images/golden_owl.png';
import './index.sass';
import useMobileWidth from '../../utils/hooks/useMobileWidth';

const Footer = () => {
  const isMobile = useMobileWidth()

  const mobileRender = () => (
    <div className="footer__bottom-content-wrapper">
      <img className="d-block" src={go} alt="golden-logo" />
      <div className="footer__bottom-grid-container">
        <div className="row footer__bottom-grid-row">
          <div className="col-6">
            <h3 className="footer__bottom-grid-title">Our Services</h3>
            <div>
              <Link to="/services/web-development">Website development</Link>
              <Link to="/services/mobile-development">Mobile development</Link>
              <Link to="/services/ux-ui-design">UX UI design</Link>
              <Link to="/services/project-management">Project management</Link>
              <Link to="/services/development-team">Development team</Link>
            </div>
          </div>
          <div className="col-6">
            <h3 className="footer__bottom-grid-title">Links</h3>
            <div>
              <Link to="/about-us">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/technologies">Technologies</Link>
              <Link to="/testimonial">Testimonials</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>
          <div className="col-6">
            <h3 className="footer__bottom-grid-title">Others</h3>
            <div>
              {/* <a href="/careers">Careers</a> */}
              <Link to="/contact-us">Contact us</Link>
              {/* <a href="/faq">FAQ</a> */}
              {/* <Link to="/blog">Blog</Link> */}
            </div>
          </div>
          <div className="col-6">
            <div className="footer__contact row">
              <span className="col-md-6 footer__phone">(+84) 912 878985</span>
              <span className="col-md-5 footer__email">claire@goldenowl.asia</span>
            </div>
            <div className="footer__social-icons-wrapper d-flex justify-content-start align-items-center">
              {socialIcons.map((icon) => (
                <a href={icon.link}>
                  <img
                    key={icon.name}
                    src={icon.url}
                    className={`footer__social-icon d-inline-block footer__icon-${icon.name}`}
                    alt={icon.name}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  </div>
  )

  const defaultRender = () => (
    <div className="footer__bottom-content-wrapper">
    <div className="footer__logo-wrapper">
      <img className="d-block" src={go} alt="golden-logo" />
      <div className="footer__social-icons-wrapper d-flex justify-content-start align-items-center">
        {socialIcons.map((icon) => (
          <a href={icon.link}>
            <img
              key={icon.name}
              src={icon.url}
              className={`footer__social-icon d-inline-block footer__icon-${icon.name}`}
              alt={icon.name}
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <div className="footer__contact row">
        <span className="col-md-6 footer__phone">(+84) 912 878985</span>
        <span className="col-md-5 footer__email">admin@goldenowl.asia</span>
      </div>
    </div>
    <div className="footer__bottom-grid-container">
      <div className="row footer__bottom-grid-row">
        <div className="col-md-6 pl-0 ">
          <h3 className="footer__bottom-grid-title">Our Services</h3>
          <div>
            <Link to="/services/web-development">Website development</Link>
            <Link to="/services/mobile-development">Mobile development</Link>
            <Link to="/services/ux-ui-design">UX UI design</Link>
            <Link to="/services/project-management">Project management</Link>
            <Link to="/services/development-team">Development team</Link>
          </div>
        </div>
        <div className="col-md-4 pl-0">
          <h3 className="footer__bottom-grid-title">Links</h3>
          <div>
            <Link to="/about-us">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/technologies">Technologies</Link>
            <Link to="/testimonial">Testimonials</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <div className="col-md-2 pl-0">
          <h3 className="footer__bottom-grid-title">Others</h3>
          <div>
            {/* <a href="/careers">Careers</a> */}
            <Link to="/contact-us">Contact us</Link>
            {/* <a href="/faq">FAQ</a> */}
            {/* <Link to="/blog">Blog</Link> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )

  return (
  <footer id="footer" className="footer">
    <div className="footer__top-content-wrapper">
      <h4 className="footer__top-content-title">Areas we serve</h4>
      <div className="row">
        <div className="col-6 col-md-3 pr-5">
          <h5>Ho Chi Minh City</h5>
          <p>MB Bank Building, 538 Cach Mang Thang Tam Ward 11, District 3</p>
          <p>claire@goldenowl.asia</p>
          <p>(+84) 912 878985</p>
        </div>
        <div className="col-6 col-md-3">
          <h5>Norway</h5>
          <p>
            Romemyra 30, 7091{" "}            
            <br className="d-block"/>
            Tiller
          </p>
          <p>(+47) 95869324</p>
        </div>
        <div className="col-6 col-md-3">
          <h5>London</h5>
          <p>
            HERTFORDSHIRE OFFICE{" "}
            <br />
            8 Parkway Porters Wood
            <br />
            St Albans
          </p>
          <p>(+0345) 456 0522</p>
        </div>
        <div className="col-6 col-md-3">
          <h5>Sydney</h5>
          <p>
            Suite 8, Level 2, 1 Box Road
            <br />
            Taren Point, NSW 2229
          </p>
          <p>(+02) 8212 4222</p>
        </div>
      </div>
    </div>
    {isMobile ? mobileRender() : defaultRender()}
    <div className="footer__copyright">
      <p>Copyright 2015 © Golden Owl Consulting</p>
    </div>
  </footer>
);}

export default Footer;
