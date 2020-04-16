import React from 'react';

import objectToArray from '../../../../utils/objectToArray';
import testimonialsStats from '../../../../utils/testimonialsStats';

import './index.sass';

const TestimonialsStats = () => (
  <section className="testimonials-stats">
    <div className="testimonials-stats__wrapper">
      <h2 className="title">
        {`We’re honored to contribute to\n clients’ success`}
      </h2>
      <div className="row">
        {
          objectToArray(testimonialsStats).map((item) => (
            <div key={item.key} className="col-6 col-md-3 stats">
              <h2>
                {item.number}
                <sup>{item.unit}</sup>
              </h2>
              <p>{item.key}</p>
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default TestimonialsStats;
