import React from 'react';
import technologiesLogo from '../../utils/TechnologiesLogo';
import './index.sass';

function Technologies() {
  return (
    <section className="technologies">
      <h2>Technologies we use</h2>
      <div className="technologies__grid">
        {technologiesLogo.map((logo, index) => <img key={index} src={logo.url} alt={logo.name} />)}
      </div>
    </section>
  );
}

export default Technologies;
