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
            <strong>Start-ups and enterprises have come to us worried about staying within budget, meeting deadlines, and building a skilled team fast enough. We’ve helped all of their projects succeed.</strong>
            <br />
            <br />
            When a client does give us feedback, it's a very kind gesture. Thanks to your valuable reviews and opinions, we can be sure that our efforts bring desired results. Your words help us constantly improve our customer experiences by knowing what we are doing right and what we can work on.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSummary;
