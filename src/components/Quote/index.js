import React from 'react';
import work from '../../assets/images/work.png';
import './index.sass';

function Quote() {
  return (
    <section className="quote">
      <div className="quote__left-side">
        <h1 className="quote__content">
          “If you deprive yourself of offshore development and your competitors do not, you are putting yourself out of business”
        </h1>
        <div className="quote__author">
          <strong className="quote__text-bold">Lee Kuan Yew - </strong>
          <span>the first Prime Minister of Singapore.</span>
        </div>
      </div>
      <div className="quote__right-side">
        <img src={work} alt="work" />
      </div>
    </section>
  );
}

export default Quote;
