import React from 'react';
import go from '../../assets/images/go.png';
import socialIcons from '../../utils/SocialIcons';
import './index.sass';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main-content">
        <div className="footer__logo-wrapper">
          <img src={go} alt="golden-logo" />
        </div>
        <div className="footer__flex-container">
          <div>
            <h3>COMPANY</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Testimonials</a>
          </div>
          <div>
            <h3>SERVICES</h3>
            <a href="#">Web Development</a>
            <a href="#">Mobile Development</a>
            <a href="#">UX/UI Design</a>
            <a href="#">Project Management</a>
            <a href="#">Development Team</a>
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
          {socialIcons.map((icon) => <img src={icon.url} className="footer__social-icon" alt={icon.name} />)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
