import React from 'react';

import SlideTab from '../../../../components/Tabs/SlideTab';

import useMobileWidth from '../../../../utils/hooks/useMobileWidth';
import './index.sass';

const TechnologyDetail = () => {
  const isMobile = useMobileWidth();
  return (
    <section className="technology-detail">
      <div className="row">
        <h3 className="d-block text-center w-100" data-aos="flip-up">Explore our core technologies and tools</h3>
        <p className="technology-detail__description d-block text-center w-100" data-aos="flip-up">
          We apply the most modern technology to every single project to
          {' '}
          {isMobile || <br />}
          {' '}
          make it become
          {' '}
          {isMobile && <br />}
          the state of the art.
        </p>
        <div className="col-12">
          <SlideTab />
        </div>
      </div>
    </section>
  );
};

export default TechnologyDetail;
