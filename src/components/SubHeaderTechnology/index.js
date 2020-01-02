import React, { Component } from 'react';
import './index.sass';
import arrowDown from '../../assets/images/chevron-down-solid.svg';

class Technology extends Component {
  // state = {
  //   showTechnologies: false
  // }

  // handleTechnologies = () => {
  //   this.setState({
  //     showTechnologies: !this.state.showTechnologies
  //   });
  // }
  render() {
    // if (this.state.showTechnologies) {
    //   return (
    //     <section>
    //       <div className="technology__arrow-wrapper" onClick={this.handleTechnologies}>
    //         <h4>Technology</h4>
    //         <img className="arrow-down" src={arrowDown} alt="arrow-down" />
    //       </div>
    //       <div className="technology">
    //         <p>Technology</p>
    //       </div>
    //     </section>
    //   );
    // } else {
    return (
      <div className="technology__arrow-wrapper" onClick={this.handleTechnologies}>
        <h4>Technology</h4>
        <img className="arrow-down" src={arrowDown} alt="arrow-down" />
      </div>
    )
    // }
  }
}
export default Technology;
