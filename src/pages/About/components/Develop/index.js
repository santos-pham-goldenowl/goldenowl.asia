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
    <div className="col-md-7 pr-0 ml-auto image-wrapper">
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
        <div className="col-12 col-md-4 develop__content-text">
          <h3>Work with your beloved and familiar language</h3>
          <p>
            Golden Owl - we have a team that is expert at different programming
            languages so whatever your favourite language is, we are always here
            to turn it into your wanted product.
          </p>
        </div>
        {isMobile ? mobileImageRender() : defaultImageRender() }
      </div>
    </section>
  );
};

export default Develop;
