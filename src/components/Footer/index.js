import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import go from '../../assets/images/golden_owl.png';
import socialIcons from '../../utils/SocialIcons';
import './index.sass';

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-content-wrapper">
      <h4 className="heading-small footer__top-content-title">Areas we serve</h4>
      <div className="footer__top-content-grid">
        <div>
          <h5 className="heading-x-small">Ho Chi Minh city</h5>
          <p>MB Bank Building, 538 <br/> Cach Mang Thang Tam Ward 11, District 3</p>
          <p>justin@goldenowl.asia</p>
          <p>(+84) 912 878985</p>
        </div>
        <div>
          <h5 className="heading-x-small">Ha Noi</h5>
          <p>02 Le Van Thiem, Nhan Chinh <br/> Thanh Xuan, Ha Noi</p>
          <p>+(84) 91 287 89 85</p>
        </div>
        <div>
          <h5 className="heading-x-small">London</h5>
          <p>HERTFORDSHIRE OFFICE <br/> 8 Parkway Porters Wood <br/> St Albans</p>
          <p>0345 456 0522</p>
        </div>
        <div>
          <h5 className="heading-x-small">Sydney</h5>
          <p>Suite 8, Level 2, 1 Box Road <br/> Taren Point, NSW 2229</p>
          <p>(02) 8212 4222</p>
        </div>
      </div>
    </div>
    <div className="footer__bottom-content-wrapper">
      <div className="footer__logo-wrapper">
        <div>
          <img src={go} alt="golden-logo" />
        </div>
        <div className="footer__social-icons-wrapper">
          {socialIcons.map(icon => <img src={icon.url}
                                        className={`footer__social-icon footer__icon-${icon.name}`}
                                        alt={icon.name} loading="lazy" />)}
        </div>
        <div className="footer__contact">
          <span className="footer__phone">(+84) 912 878985</span>
          <span className="footer__email">admin@goldenowl.asia</span>
        </div>
      </div>
      <div className="footer__bottom-grid-container">
        <div>
          <h3 className="footer__bottom-grid-title">Our Services</h3>
          <div style={{lineHeight: "32px"}}>
            <Link to="/services/web-development">Website development</Link>
            <Link to="/services/mobile-development">Mobile development</Link>
            <Link to="/services/ux-ui-design">UX UI design</Link>
            <Link to="/services/project-management">Project management</Link>
            <Link to="/services/development-team">Development Team</Link>
          </div>
        </div>
        <div>
          <h3 className="footer__bottom-grid-title">Links</h3>
          <div style={{lineHeight: "32px"}}>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/technologies">Technologiies</Link>
            <a href="#">Testimonials</a>
            <a href="#">Portfolio</a>
          </div>
        </div>
        <div>
          <h3 className="footer__bottom-grid-title">Others</h3>
          <div style={{lineHeight: "32px"}}>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p>Copyright 2019 © Golden Owl Consulting</p>
    </div>
  </footer>
);

Footer.propTypes = {
  socialIcons: PropTypes.array.isRequired,
}

export default Footer;
