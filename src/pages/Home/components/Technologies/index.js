import React from 'react';

import technologiesLogo from '../../../../utils/TechnologiesLogo';
import './index.sass';

const Technologies = () => (
  <section className="technologies">
    <h3 className="technologies__title heading-base">Technologies we use</h3>
    <div className="row">
      {technologiesLogo.map(logo => (
        <div className="col-lg-2 d-flex">
          <img
            className="technologies__grid-item"
            src={logo.url}
            alt={logo.name}
          />
        </div>
      ))}
    </div>
    <span className="technologies__view-all">View all technologies</span>
  </section>
);

export default Technologies;
