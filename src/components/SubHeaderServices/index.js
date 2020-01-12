import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServicesData from '../../utils/Services';
import './index.sass';
import arrowDown from '../../assets/images/chevron-down-solid.svg';

class Services extends Component {
  state = {
    showServices: false
  }

  handleServicesOn = () => (
    this.setState({
      showServices: true
    })
  );

  handleServicesOff = () => (
    this.setState({
      showServices: false
    })
  );

  render() {
    const servicesNode = (
      <section className="services">
        <div className="services__arrow-wrapper" onMouseEnter={this.handleServicesOn}>
          <Link to="/services">
            <h4 className="sub-header__text">Services</h4>
          </Link>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
        <div className="services__items" onMouseLeave={this.handleServicesOff}>
          {ServicesData.map(service => {
            return (
              <Link to={`/services/${service.link}`}>
                <div className="services__service">
                  <div className="services__icon-wrapper">
                    <img src={service.url} alt={service.name} />
                  </div>
                  <div className="services__service-description-wrapper">
                    <h4>{service.name}</h4>
                    <p className="services__service-description">{service.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );

    const buttoNode = (
      <section className="services">
        <div className="services__arrow-wrapper" onMouseEnter={this.handleServicesOn}>
          <Link to="/services">
            <h4 className="sub-header__text">Services</h4>
          </Link>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
      </section>
    );
    return(
      <div>
        {this.state.showServices ? servicesNode : buttoNode}
      </div>
    )
  }
}
export default Services;
