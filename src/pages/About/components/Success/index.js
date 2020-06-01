/* eslint-disable  max-len */

import React from 'react';

import map from '../../../../assets/images/map.svg';
import './index.sass';

const Success = () => {
  return (
    <section className="success">
      <div className="row success__main">
        <div className="col-12 col-md-6">
          <h1 className="success__main-title">
          What we’ve achieved so far
          </h1>
        </div>
        <div className="col-12 col-md-6 success__main-description">
          <p>
            As a bespoke software development company we have delivered a vast range of applications that have made a significant difference in their business.
            <br />
            <br />
            We served start-ups and enterprises across the globe: B2B, B2C, Retail, Education, HR Management, Travel, Hospitality, Ecommerce, IT Solutions, Fintech, Finance, Real estate, Legal
          </p>
        </div>
      </div>
      <div className="row success__sum">
        <div className="col-12 col-md-6">
          <h3>
            {/* {isMobile ? 'Our company' : '30+ mobile apps' } */}
            30+ mobile apps
            {/* Our Services */}
          </h3>
          <p className="success__left-side success__paragraph">
            We offer custom software development in full package from conception to delivery. We build applications that your user will love.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <h3>
            45+ websites
            {/* What make us unique */}
          </h3>
          <p className="success__paragraph">
            You can rest assured the code behind your website is exactly the right fit, clean and easy to maintain.
          </p>
        </div>
        <div className="col-12 col-md-6" />
        <div className="col-12 col-md-6">
          <h3>
            7 countries
          </h3>
          <p className="success__paragraph">
          We are proud of being a well-known enterprise which can work together with clients coming from Singapore, UK, America, etc. 
          </p>
          <img className="success__map" src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Success;
