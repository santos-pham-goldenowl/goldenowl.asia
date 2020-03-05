import React from 'react';

import work from '../../../../assets/images/work.png';
import './index.sass';

const Quote = () => (
  <section className="quote">
    <div className="col-lg-5">
      <h1 className="quote__content">
        “If you deprive yourself of offshore development and your competitors do not, you are putting yourself out of business”
      </h1>
      <div className="quote__author">
        <strong className="quote__text-bold">Lee Kuan Yew - </strong>
        <span>the first Prime Minister of Singapore.</span>
      </div>
    </div>
    <div className="col-lg-7">
      <img src={work} alt="work" loading="lazy" />
    </div>
  </section>
);

export default Quote;
