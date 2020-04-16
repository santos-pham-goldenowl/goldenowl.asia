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
          <h3 className="introduction__title">Hi, World! We're Golden Owl</h3>
          <p className="introduction__text">
            If you’re looking for a software company to transform your business to the next level, you've found the right partner to help.
            <br />
            <br />
            We are strongly recommended by technical and non-technical leaders in various industries including retail, ecommerce, real estate, legal, travel & hospitality,...
            <br />
            <br />
            Our reputation is built on engineering standards, development standards, our work ethic and responsive workflow. It's the work that we push out to the world that speaks most about us.
          </p>
        </div>
        <img src={study} alt="study" loading="lazy" />
      </div>
    </section>
  );
};

export default Introduction;
