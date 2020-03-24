import React from "react";
import "./index.sass";

const ArrowRight = ({ className }) => (
  <section className={`arrow-wrapper ${className}`}>
    <div className="arrow arrow-right" />
    <div className="line" />
  </section>
);

export default ArrowRight;
