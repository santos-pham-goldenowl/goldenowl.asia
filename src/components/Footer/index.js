import React from 'react';
import { Link } from 'react-router-dom';
import go from '../../assets/images/go.png';
import socialIcons from '../../utils/SocialIcons';
import './index.sass';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main-content">
      <div className="footer__logo-wrapper">
        <img src={go} alt="golden-logo" />
      </div>
      <div className="footer__grid-container">
        <div>
          <h3>COMPANY</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Testimonials</a>
        </div>
        <div>
          <h3>SERVICES</h3>
          <Link to="/services/web-development">Web Development</Link>
          <Link to="/services/mobile-development">Mobile Development</Link>
          <Link to="/services/ux-ui-design">UX/UI Design</Link>
          <Link to="/services/project-management">Project Management</Link>
          <Link to="/services/development-team">Development Team</Link>
        </div>
        <div>
          <h3>MENU 3</h3>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">Lorem ipsum dolor</a>
        </div>
        <div>
          <h3>CONTACT</h3>
          <a href="#">Lorem ipsum dolor</a>
          <a href="#">Lorem ipsum dolor</a>
          <a href="#">Lorem ipsum dolor</a>
          <a href="#">Lorem ipsum dolor</a>
        </div>
      </div>
    </div>
    <div className="footer__contact">
      <span className="footer__phone">(+84) 912 878985</span>
      <span className="footer__email">admin@goldenowl.asia</span>
    </div>
    <div className="footer__copyright">
      <p>Copyright 2019 © Golden Owl Consulting</p>
      <div>
        {socialIcons.map((icon) => <img src={icon.url} className="footer__social-icon" alt={icon.name} loading="lazy" />)}
      </div>
    </div>
  </footer>
);

export default Footer;
