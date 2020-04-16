import React from 'react';

import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import work from '../../../../assets/images/work.png';
import mobileWork from '../../../../assets/images/mobileWork.png';

import './index.sass';

const Quote = () => {
  const isMobile = useMobileWidth();

  return (
    <section className="quote">
      <div className="row">
        <div className="col-md-5">
          <h1 className="quote__content">
            “The best customer service is if the customer doesn’t need to call you, doesn’t need to talk to you. It just works.”
          </h1>
          <div className="quote__author">
            <strong className="quote__text-bold">Jeff Bezos - </strong>
            <span>CEO of Amazon.</span>
          </div>
        </div>
        <div className="col-md-7">
          <img src={isMobile ? mobileWork : work} alt="work" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Quote;
