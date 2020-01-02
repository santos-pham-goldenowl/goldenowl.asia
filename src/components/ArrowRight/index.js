import React from 'react';
import './index.sass';

function ArrowRight(props) {
  return (
    <section className="arrow-wrapper">
      <div className="arrow arrow-right" style={{left: props.left}}></div>
      <div className="line" style={{width: props.width}}></div>
    </section>
  );
}

export default ArrowRight;
