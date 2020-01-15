import React from 'react';
import study from '../../assets/images/study.png';
import './index.sass';

function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__left-side">
        <img src={study} alt={study} loading="lazy" />
      </div>
      <div className="introduction__right-side">
        <h3 className="introduction__title heading-base">We are Golden Owl</h3>
        <p className="introduction__text text-xl">
          The role of Golden Owl Asia starts where Enterprise meets technology. We provide IT solutions that allow our Clients to achieve specific goals and measurable benefits.
        </p>
        <p className="introduction__text text-xl">
          Working with us would mean working with a virtual team in a different time zone so that effective communication remains the number one issue. Quality of operations and accelerate speed to the market are improved with scalable and flexible services.
        </p>
      </div>
    </section>
  );
}

export default Introduction;
