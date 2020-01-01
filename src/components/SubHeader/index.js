import React, { Component } from 'react';
import servicesLogo from '../../utils/ServicesLogo';
import './index.sass';

class SubHeader extends Component {

  state = {
    showServices: false
  }

  handleServices = () => {
    this.setState({
      showServices: !this.state.showServices
    })
  }

  render() {
    let servicesNode = null;
    if(this.state.showServices) {
      servicesNode = (
        <div className="sub-header__services">
          {servicesLogo.map(logo => {
            return (
              <div className="sub-header__sevice">
                <img src={logo.url} alt={logo.name} />
                <h4>{logo.name}</h4>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <header className="sub-header">
        <h4>Home</h4>
        <h4 onClick={this.handleServices}>Services</h4>
        {servicesNode}
        <h4>Technology</h4>
        <h4>Testimonial</h4>
        <h4>Contact us</h4>
      </header>
    );
  }
}

export default SubHeader;
