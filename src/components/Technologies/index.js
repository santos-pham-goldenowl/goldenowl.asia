import React from 'react';
import technologiesLogo from '../../utils/TechnologiesLogo';
import './index.sass';

function Technologies() {
  return (
    <section className="technologies">
      <h2 className="technologies__title">Technologies we use</h2>
      <div className="technologies__grid">
        {technologiesLogo.map((logo, index) => <img key={index} src={logo.url} alt={logo.name} />)}
      </div>
      <span className="technologies__view-all">View all technologies</span>
  </section>
  );
}

export default Technologies;
