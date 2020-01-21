import React from 'react';
import '../Service/index.sass';

const OtherService = props => (
  <div className="service__other-services-container">
    <h2 className="service__other-services-title">Other services</h2>
    <div>
      <div className="service__other-services-flex-item">
        <img src={props.firstService} alt="web" loading="lazy" />
        <h3>{props.firstService}</h3>
      </div>
    </div>
  </div>
);

export default OtherService;
