import React from 'react';
import './index.sass';
import AutoCarousel from '../AutoCarousel';
import feedback from '../../utils/Feedback';

function Feedback() {
  return (
    <section className="feedback">
      <h2>What our clients say</h2>
      <AutoCarousel content={feedback} />
    </section>
  );
}

export default Feedback;
