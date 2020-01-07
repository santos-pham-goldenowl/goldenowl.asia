import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goldenOwl from '../../assets/images/golden_owl.png';
import './index.sass';

class MainHeader extends Component {
  state = {
    showMenu: false,
  }

  handleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    if(this.state.showMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    if(!this.state.showMenu) {
      return (
        <header className="main-header">
          <div className={!this.state.showMenu ? 'main-header__left-side' : 'main-header__left-side-show'}>
            <div className="main-header__logo-wrapper">
              <Link to="/">
                <img src={goldenOwl} alt="company-logo" />
              </Link>
            </div>
            <div className="main-header__hamburger" onClick={this.handleMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className='main-header__right-side'>
            <ul className='main-header__flex-container'>
              <li className="main-header__flex-item">
                <Link to="/about">About Golden Owl</Link>
              </li>
              <li className="main-header__flex-item">Blog</li>
              <li className="main-header__flex-item">Portfolio</li>
              <li className="main-header__flex-item">English</li>
            </ul>
          </div>
        </header>
      );
    } else {
      return (
        <header className="main-header">
          <div className='main-header__left-side-show'>
            <div className="main-header__logo-wrapper">
              <Link to="/">
                <img src={goldenOwl} alt="company-logo" />
              </Link>
            </div>
            <div className="main-header__hamburger" onClick={this.handleMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className='main-header__right-side-show'>
            <ul className={!this.state.showMenu ? 'main-header__flex-container' : 'main-header__flex-container-show'}>
              <li className="main-header__flex-item">
                <Link to="/about">About Golden Owl</Link>
              </li>
              <li className="main-header__flex-item">Blog</li>
              <li className="main-header__flex-item">Portfolio</li>
              <li className="main-header__flex-item">English</li>
              <li style={{borderBottom: "1px solid #f1e3b9"}}></li>
              <li className="main-header__flex-item" style={{paddingTop: "20px"}}>Services</li>
              <li className="main-header__flex-item">Technology</li>
              <li className="main-header__flex-item">Testimonial</li>
              <li className="main-header__flex-item">Contact us</li>
            </ul>
          </div>
        </header>
      );
    }
  }
}

export default MainHeader;
