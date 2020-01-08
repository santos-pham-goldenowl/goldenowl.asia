import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServicesData from '../../utils/Services';
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
          <div className="services__arrow-wrapper" onMouseEnter={this.handleServices}>
            <Link to="/services"><h4>Services</h4></Link>
            <img className="arrow-down" src={arrowDown} alt="arrow-down" />
          </div>
          <div className="services">
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
    } else {
      return (
        <div className="services__arrow-wrapper" onMouseLeave={this.handleServices}>
          <Link to="/services"><h4>Services</h4></Link>
          <img className="arrow-down" src={arrowDown} alt="arrow-down" />
        </div>
      )
    }
  }
}
export default Services;
