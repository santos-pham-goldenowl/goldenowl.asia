import React from 'react';
import AnimatedNumber from "animated-number-react";

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
            
              <h2 transform="rotate(-15 150 150) translate(500,100)">
                            <AnimatedNumber
                                style={{
                                    transition: '0.8s ease-out',
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                frameStyle={perc => (
                                    perc === 100 ? {} : {opacity: 0.25}
                                )}
                                duration={3000}
                                value={item.number}
                                className="number"
                                component="text"
                                formatValue={n => `${Number(n).toFixed(0)}`}/>

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
