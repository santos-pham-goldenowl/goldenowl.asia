import React from 'react';

import study from '../../../../assets/images/study.png';
import './index.sass';

const Introduction = () => (
  <section className="introduction d-flex">
    <div className="col-md-5 introduction__left-side">
      <img src={study} alt={study} loading="lazy" />
    </div>
    <div className="col-md-6 ml-auto">
      <h3 className="introduction__title">We are Golden Owl</h3>
      <p className="introduction__text">
      The role of Golden Owl Asia starts where Enterprise meets technology. We provide IT solutions that allow our Clients to achieve specific goals and measurable benefits.
        <br />
        <br />
      Working with us would mean working with a virtual team in a different time zone so that effective communication remains the number one issue.  Quality of operations and accelerate speed to the market are improved with scalable and flexible services.
      </p>
    </div>
  </section>
);

export default Introduction;
