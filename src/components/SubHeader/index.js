import React, { Component } from "react";
import { Link } from "react-router-dom";

import ServicesData from "../../utils/Services";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowDown from "../../assets/images/chevron-down-solid.svg";
import "./index.sass";
import "./service.sass";

class SubHeader extends Component {
  state = { showServices: false };

  handleServicesOn = () => this.setState({ showServices: true });

  handleServicesOff = () => this.setState({ showServices: false });

  render() {
    const servicesNode = (
      <div className="services" onMouseLeave={this.handleServicesOff}>
        <div
          className="services__arrow-wrapper"
          onMouseEnter={this.handleServicesOn}
        >
          <Link className="services__link" to="/services">
            <h4 className="sub-header__text">Services</h4>
          </Link>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
        <div className="services__items">
          {ServicesData.map(service => (
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
    );

    const buttoNode = (
      <div className="services">
        <div
          className="services__arrow-wrapper"
          onMouseEnter={this.handleServicesOn}
        >
          <Link to="/services">
            <h4 className="sub-header__text">Services</h4>
          </Link>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
      </div>
    );
    return (
      <header className="sub-header d-flex">
        <div className="d-flex align-items-center sub-header__button">
          <Link to="/">
            <h4 className="sub-header__text">Home</h4>
          </Link>
        </div>
        <div>{this.state.showServices ? servicesNode : buttoNode}</div>
        <div className="d-flex align-items-center sub-header__button">
          <Link to="/technologies">
            <h4 className="sub-header__text">Technology</h4>
          </Link>
        </div>
        <div className="d-flex align-items-center sub-header__button">
          <Link to="/testimonials">
            <h4 className="sub-header__text">Testimonial</h4>
          </Link>
        </div>
        <div className="sub-header__contact-wrapper d-flex align-items-center justify-content-center">
          <Link to="/contact-us" className="d-flex">
            <h4 className="sub-header__contact-title sub-header__text">
              Contact us
            </h4>
            <img
              className="sub-header__arrow-right"
              src={arrowRight}
              alt="arrow-right"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default SubHeader;
