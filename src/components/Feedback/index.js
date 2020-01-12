import React from 'react';
import AutoCarousel from '../AutoCarousel';
import feedback from '../../utils/Feedback';
import './index.sass';

const Feedback = () => (
  <section className="feedback">
    <h2 className="feedback__title">What our clients say</h2>
    <AutoCarousel content={feedback} />
  </section>
);

export default Feedback;
