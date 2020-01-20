import React from 'react';
import './index.sass';
import map from '../../assets/images/map.svg';

const Success = () => (
  <section className="success">
    <div className="flex-box">
      <div className="flex-one">
        <h1 className="heading-lg success__left-side success__main-title">
          Lorem ipsum dolor sit amet, libris delenit
        </h1>
      </div>
      <p className="flex-one success__intro text-xl">
        We pride ourselves on having clients’ satisfaction in the products we built. Our proven experience is deep from 30+ Mobile Applications and 45+ Website projects across 7 countries, including America, the United Kingdom, Malaysia, Australia, Thailand, Indonesia, Singapore, etc.
      </p>
    </div>

    <div className="flex-box">
      <div className="flex-one">
        <h3 className="success__title success__left-side heading-base">
          30+ mobile application
        </h3>
        <p className="success__left-side success__paragraph text-lg">
          We have turned client’s idea into more than 30 mobile applications successfully. Each of them has different unique features from design to main business.
        </p>
      </div>

      <div className="flex-one">
        <h3 className="success__title heading-base">
          45+ websites
        </h3>
        <p className="success__paragraph text-lg">
          We also fulfilled at least 45 websites in many fields like ecommerce, management, etc. Some of them are used by big groups, companies and a large number of users.
        </p>
      </div>
    </div>

    <div className="flex-box">
      <div className="flex-one"></div>
      <div className="flex-one">
        <h3 className="success__title heading-base">
        7 countries
        </h3>
        <p className="success__paragraph text-lg">
          We are proud of being a well-known enterprise which can work together with clients coming from Singapore, UK, America, etc.
        </p>
        <img className="success__map" src={map} alt="map" />
      </div>
    </div>
  </section>
);

export default Success;
