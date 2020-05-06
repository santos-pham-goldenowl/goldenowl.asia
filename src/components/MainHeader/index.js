import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

import goldenOwl from '../../assets/images/golden_owl.svg';
import arrowDown from '../../assets/images/chevron-down-solid.svg';
import './index.sass';

class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  openPortfolioInNewTab = () => {
    const win = window.open('/portfolio');
    win.focus();
  };

  render() {
    return (
      <header className="main-header">
        <div className="main-header__left-side">
          <div className="main-header__logo-wrapper">
            <Link to="/">
              <img
                src={goldenOwl}
                className="main-header__logo"
                alt="company-logo"
                loading="lazy"
              />
            </Link>
          </div>
          <MobileMenu />
        </div>
        <div className="main-header__right-side">
          <ul className="main-header__flex-container">
            <li className="main-header__flex-item">
              <Link to="/about-us">About Golden Owl</Link>
            </li>
            {/* <li className="main-header__flex-item">
              <Link to="/blog">Blog</Link>
            </li> */}
            <li className="main-header__flex-item">
              <Link onClick={this.openPortfolioInNewTab}>Portfolio</Link>
            </li>
            <li className="d-none main-header__flex-item font-bold">
              <span>English</span>
              <img
                className="arrow-down"
                src={arrowDown}
                alt="arrow-down"
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default MainHeader;
