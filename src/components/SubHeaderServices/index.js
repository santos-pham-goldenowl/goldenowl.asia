import React, { Component } from 'react';
import servicesLogo from '../../utils/ServicesLogo';
import './index.sass';
import arrowDown from '../../assets/images/chevron-down-solid.svg';

class Services extends Component {
  state = {
    showServices: false
  }

  handleServices = () => {
    this.setState({
      showServices: !this.state.showServices
    });
  }
  render() {
    if (this.state.showServices) {
      return (
        <section>
          <div className="services__arrow-wrapper" onClick={this.handleServices}>
            <h4>Services</h4>
            <img className="arrow-down" src={arrowDown} alt="arrow-down" />
          </div>
          <div className="services">
            {servicesLogo.map(service => {
              return (
                <div className="services__service">
                  <div className="services__icon-wrapper">
                    <img src={service.url} alt={service.name} />
                  </div>
                  <div className="services__service-description-wrapper">
                    <h4>{service.name}</h4>
                    <p className="services__service-description">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      );
    } else {
      return (
        <div className="services__arrow-wrapper" onClick={this.handleServices}>
          <h4>Services</h4>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
      )
    }
  }
}
export default Services;
