import React from 'react';

import surfWeb from '../../../../assets/images/testimonials/surfWeb.svg';

import './index.sass';

const StatsSummary = () => (
  <section className="stats-summary">
    <div className="row">
      <div className="col-md-6">
        <div className="stats-summary__image-wrapper">
          <img
            className="w-100"
            src={surfWeb}
            alt="typing"
          />
        </div>
      </div>
      <div className="ml-auto col-md-6">
        <div className="stats-summary__paragraph">
          <p>
            Thanks to valuable reviews from our clients, we can be confident that our efforts bring desired results.
            Your words help us constantly improve our customer experiences by knowing what we are doing right and
            what we can work on. Generally, our clients are not only satisfied by outstanding product quality but
            also the excellent communication and how we went extra miles to help.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSummary;
