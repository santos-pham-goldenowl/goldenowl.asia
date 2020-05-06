import React from 'react';
import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import code from '../../../../assets/images/code2.png';
import mobileCode from '../../../../assets/images/mobileCode.png';

import './index.sass';

const Develop = () => {
  const isMobile = useMobileWidth();

  const mobileImageRender = () => (
    <div className="col-12 image-wrapper">
      <img className="develop__image-placeholder invisible" src={mobileCode} alt="code" />
      <img className="develop__image" src={mobileCode} alt="code" />
    </div>
  );

  const defaultImageRender = () => (
    <div className="col-md-7 pr-0 ml-auto image-wrapper d-flex flex-column justify-content-center">
      <div className="rectangle" />
      <img className="develop__image" src={code} alt="code" />
    </div>
  );

  return (
    <section className="develop">
      <h2 className="develop__title">
        Develop with tools you
        <br />
        already love
      </h2>
      <div className="row develop__content">
        <div className="col-12 col-md-4 develop__content-text d-flex flex-column justify-content-center">
          <h3>Are you...</h3>
          <p>
              struggling with digital transformation?
              <br/>
              build MVP for a groundbreaking idea?
              <br/>
              looking for a distributed team?
              <br/>
              offset costs of hiring local engineers?
              <br/>
              looking for extra workforce for in-house projects with tight deadlines?
              <br/>
              <br />
              <strong>We are here to help!</strong>
              <br />
              Just drop us a message and we will contact you back to make your idea possible!
          </p>
        </div>
        {isMobile ? mobileImageRender() : defaultImageRender() }
      </div>
    </section>
  );
};

export default Develop;
