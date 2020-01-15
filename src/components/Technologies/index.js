import React from 'react';
import technologiesLogo from '../../utils/TechnologiesLogo';
import './index.sass';

const Technologies = () => (
  <section className="technologies">
    <h3 className="technologies__title heading-base">Technologies we use</h3>
    <div className="technologies__grid">
      {technologiesLogo.map((logo, index) => <img className={`technologies__${logo.name}`} key={index} src={logo.url} alt={logo.name} />)}
    </div>
    <span className="technologies__view-all">View all technologies</span>
  </section>
);

export default Technologies;
