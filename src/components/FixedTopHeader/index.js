import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ServicesData from 'utils/servicesMenuContent'
import arrowRight from 'assets/images/arrow-right-white.png'
import arrowDown from 'assets/images/chevron-down-solid-white.png'
import goWhite from 'assets/images/goWhite.png'

import './index.sass'
import './service.sass'

class FixedTopHeader extends Component {
  render() {
    return (
      <header id="fixed-top-header" className="fixed-top-header d-none fixed-top">
        <img src={goWhite} className="fixed-top-header__logo mr-auto" />
        <div className="d-flex align-items-center fixed-top-header__button">
          <Link to="/">
            <h4 className="fixed-top-header__text">Home</h4>
          </Link>
        </div>
        {/* Services Dropdown-start */}
        <div className="dropdown">
          <div
            className="align-items-center fixed-top-header__button"
            id="services-dropdown"
          >
            <Link
              className="d-flex align-items-center no-hover-text-decoration"
              to="/services"
            >
              <h4 className="fixed-top-header__text">Services</h4>
              <img className="arrow-down" src={arrowDown} alt="arrow-down" />
            </Link>
          </div>
          <div className="dropdown-content">
            <div className="services__items">
              {ServicesData.map((service) => (
                <Link key={service.link} to={`/services/${service.link}`}>
                  <div className="services__service">
                    <div className="services__icon-wrapper">
                      <img src={service.url} alt={service.name} />
                    </div>
                    <div className="services__service-description-wrapper">
                      <h4>{service.name}</h4>
                      <p className="services__service-description">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Services Dropdown-end */}
        <div className="d-flex align-items-center fixed-top-header__button">
          <Link to="/technologies">
            <h4 className="fixed-top-header__text">Technology</h4>
          </Link>
        </div>
        <div className="d-flex align-items-center fixed-top-header__button">
          <Link to="/testimonial">
            <h4 className="fixed-top-header__text">Testimonial</h4>
          </Link>
        </div>
        <div className="fixed-top-header__contact-wrapper d-flex align-items-center justify-content-center">
          <Link to="/contact-us" className="d-flex align-items-center">
            <h4 className="fixed-top-header__contact-title fixed-top-header__text">
              Contact us
            </h4>
            <img
              className="fixed-top-header__arrow-right"
              src={arrowRight}
              alt="GO-contact-us"
            />
          </Link>
        </div>
      </header>
    )
  }
}

export default FixedTopHeader
