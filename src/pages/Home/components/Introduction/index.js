/* eslint-disable  max-len */

import React from 'react';
import useMobileWidth from '../../../../utils/hooks/useMobileWidth';
import study from '../../../../assets/images/study.png';
import './index.sass';

const Introduction = () => {
  const isMobile = useMobileWidth();
  return (
    <section className="introduction">
      <div className>
        <div className={`${isMobile ? 'w-100' : 'w-50'} ml-auto`} data-aos="fade-left">
          <h3 className="introduction__title">What are you looking for?</h3>
          <p className="introduction__text">
            <strong>Business needs bespoke software.</strong>
            <br />
            <br />
            Since 2015, we’ve helped our clients harness the power of digital innovation through software in a variety of industries such as SaaS, ecommerce, legal, real estate,...
            <br />
            <br />
            Whether your need is to build a new software from scratch or to accelerate digital transformation, our experts are always ready to provide you with the deep consulting and right technology match.
          </p>
        </div>
        <img src={study} alt="study" loading="lazy" data-aos="fade-right" />
      </div>
    </section>
  );
};

export default Introduction;
