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
            The effort of our developers have gained achievement when lots of
            our clients give good feedback about our service. They not only
            talk about how much effort the project team made but also about
            how friendly and how good the team is. Thanks to those positive
            comments, we are here will always try our best to keep giving the
            best service to clients.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSummary;
