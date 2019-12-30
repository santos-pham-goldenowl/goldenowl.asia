import React, {Component} from 'react';
import technologiesLogo from '../utils/TechnologiesLogo';
import '../styles/Technologies.sass';

class Technologies extends Component {
  render() {
    return(
      <section className='technologies'>
        <h2>Technologies we use</h2>
        <div className='technologies__grid'>
          {technologiesLogo.map((logo, index) => {
            return(
              <img key={index} src={logo.url} alt={logo.name} />
            );
          })}
        </div>
      </section>
    );
  }
}
export default Technologies;
