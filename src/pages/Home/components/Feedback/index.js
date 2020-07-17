import React from 'react';
import AutoCarousel from '../../../../components/AutoCarousel';
import feedback from '../../../../utils/feedback';
import './index.sass';

const Feedback = () => (
  <section className="feedback">
    <h3 className="feedback__title" data-aos="flip-up">What our clients say</h3>
    <AutoCarousel content={feedback} />
  </section>
);

export default Feedback;
