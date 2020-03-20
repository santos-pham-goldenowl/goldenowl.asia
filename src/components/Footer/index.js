import React from 'react'
import { Link } from 'react-router-dom'

import go from '../../assets/images/golden_owl.png'
import socialIcons from '../../utils/SocialIcons'
import './index.sass'

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-content-wrapper">
        <h4 className="heading-small footer__top-content-title">
          Areas we serve
        </h4>
      <div className="row">
        <div className="col-md-3">
          <h5>Ho Chi Minh City</h5>
          <p>MB Bank Building, 538 Cach Mang Thang Tam Ward 11, District 3</p>
          <p>justin@goldenowl.asia</p>
          <p>(+84) 912 878985</p>
        </div>
        <div className="col-md-3">
          <h5>Ha Noi</h5>
          <p>
            02 Le Van Thiem, Nhan Chinh
            <br />
            Thanh Xuan, Ha Noi
          </p>
          <p>+(84) 91 287 89 85</p>
        </div>
        <div className="col-md-3">
          <h5>London</h5>
          <p>
            HERTFORDSHIRE OFFICE
            <br />
            8 Parkway Porters Wood
            <br />
            St Albans
          </p>
          <p>0345 456 0522</p>
        </div>
        <div className="col-md-3">
          <h5>Sydney</h5>
          <p>
            Suite 8, Level 2, 1 Box Road
            <br />
            Taren Point, NSW 2229
          </p>
          <p>(02) 8212 4222</p>
        </div>
      </div>
    </div>
    <div className="footer__bottom-content-wrapper">
      <div className="footer__logo-wrapper">

        <img className="d-block" src={go} alt="golden-logo" />
        <div className="footer__social-icons-wrapper d-flex justify-content-start align-items-center">
          {socialIcons.map((icon) => (
            <img
              key={icon.name}
              src={icon.url}
              className={`footer__social-icon d-inline-block footer__icon-${icon.name}`}
              alt={icon.name}
              loading="lazy"
            />
          ))}
        </div>
        <div className="footer__contact row">
          <span className="col-md-12 col-lg-6 footer__phone">(+84) 912 878985</span>
          <span className="col-md-12 col-lg-5 footer__email">admin@goldenowl.asia</span>
        </div>
      </div>
      <div className="footer__bottom-grid-container">
        <div>
          <h3 className="footer__bottom-grid-title">Our Services</h3>
          <div>
            <Link to="/services/web-development">Website development</Link>
            <Link to="/services/mobile-development">Mobile development</Link>
            <Link to="/services/ux-ui-design">UX UI design</Link>
            <Link to="/services/project-management">Project management</Link>
            <Link to="/services/development-team">Development team</Link>
          </div>
        </div>
        <div>
          <h3 className="footer__bottom-grid-title">Links</h3>
          <div>
            <Link to="/about-us">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/technologies">Technologies</Link>
            <a href="/testimonials">Testimonials</a>
            <a href="/portfolio">Portfolio</a>
          </div>
        </div>
        <div>
          <h3 className="footer__bottom-grid-title">Others</h3>
          <div>
            <a href="#">Careers</a>
            <a href="/contact">Contact us</a>
            <a href="#">FAQ</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p>Copyright 2019 © Golden Owl Consulting</p>
    </div>
  </footer>
)

export default Footer
