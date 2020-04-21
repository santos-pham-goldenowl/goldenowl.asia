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
        <div className={`${isMobile ? 'w-100' : 'w-50'} ml-auto`}>
          <h3 className="introduction__title">What are you looking for?</h3>
          <p className="introduction__text">
            <strong>Business needs bespoke software.</strong>
            <br />
            <br />
            No matter what field you are in, business is tough. Since 2015, we’ve helped our clients harness the power of digital innovation through software in a variety of industries such as SaaS, ecommerce, legal, real estate,...
            <br />
            <br />
            Whether you’re building something from scratch or improving an existing product, our design and development consultants have you covered. Our team works with you to nail down the goals of your project and translate those goals into actionable steps.
            <br />
            <br />
            Or do you need to automate, orchestrate, coordinate, or transform your service-based business? Partner with us for custom software services focused on driving business results. Our technology mastery can help you pick the right tool for the challenge you face.
          </p>
        </div>
        <img src={study} alt="study" loading="lazy" />
      </div>
    </section>
  );
};

export default Introduction;
