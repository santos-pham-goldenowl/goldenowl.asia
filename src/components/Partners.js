import React, {Component} from 'react';
import partnersLogo from '../utils/PartnersLogo';
import '../styles/Partners.sass';

class Partners extends Component {
  render() {
    return(
      <section className='partners'>
        <h2>
          We partner with the world's best
        </h2>
        <div className='partners__grid'>
          {partnersLogo.map((logo, index) => {
            return(
              <img key={index} src={logo.url} alt={logo.name} />
            );
          })}
        </div>
      </section>
    );
  }
}
export default Partners;
