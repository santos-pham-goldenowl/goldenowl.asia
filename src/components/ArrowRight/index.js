import React from 'react';
import './index.sass';

const ArrowRight = ({ ...props }) => {
  const { left, width } = props;
  return (
    <section className="arrow-wrapper">
      <div className="arrow arrow-right" style={{ left }} />
      <div className="line" style={{ width }} />
    </section>
  );
};

export default ArrowRight;
