import React from 'react';
import AutoCarousel from '../AutoCarousel';
import feedback from '../../utils/Feedback';
import './index.sass';

const Feedback = () => (
  <section className="feedback">
    <h3 className="heading-base">What our clients say</h3>
    <AutoCarousel content={feedback} />
  </section>
);

export default Feedback;
