import React from 'react';
import technologiesLogo from '../../utils/TechnologiesLogo';
import './index.sass';

const Technologies = () => (
  <section className="technologies">
    <h2 className="technologies__title heading-lg">Technologies we use</h2>
    <div className="technologies__grid">
      {technologiesLogo.map((logo, index) => <img className={`technologies__${logo.name}`} key={index} src={logo.url} alt={logo.name} />)}
    </div>
    <span className="technologies__view-all">View all technologies</span>
  </section>
);

export default Technologies;
