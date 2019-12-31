import React, { Component } from 'react';
import go from '../../assets/images/go.png';
import './index.sass';

class MainHeader extends Component {
  state = {
    showMenu: false
  }

  handleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <header className="main-header">
        <div className={!this.state.showMenu ? 'main-header__left-side' : 'main-header__left-side-show'}>
          <div className="main-header__logo-wrapper">
            <img src={go} alt="company-logo" />
            <h1 className="main-header__golden-text">GOLDEN</h1>
            <h1 className="main-header__owl-text">OWL</h1>
          </div>
          <div className="main-header__hamburger" onClick={this.handleMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={!this.state.showMenu ? 'main-header__right-side' : 'main-header__right-side-show'}>
          <ul className={!this.state.showMenu ? 'main-header__flex-container' : 'main-header__flex-container-show'}>
            <li className="main-header__flex-item">About Goldern Owl</li>
            <li className="main-header__flex-item">Blog</li>
            <li className="main-header__flex-item">Portflio</li>
            <li className="main-header__flex-item">English</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default MainHeader;
