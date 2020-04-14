/* eslint-disable  max-len */

import React from 'react';

import bg from '../../../../assets/images/wavy_bg_2.png';
import present from '../../../../assets/images/services.png';
import servicesMobile from '../../../../assets/images/service_mobile.png';

import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import './index.sass';

const ServicesDescription = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '100vw',
  };

  const isMobile = useMobileWidth();

  return (
    <section className="services-description" style={sectionStyle}>
      <div className="row">
        <div className="col-md-5">
          <h2 className="services-description__title">Services</h2>
          <p className="">
            We provide software solutions, mostly about website and mobile applications for a wide variety of fields, from finance to commerce and so on. We are proud of being very selective and have one of the best full-stacked developer training programs in Ho Chi Minh City.
            <br />
            <br />
            Lots of clients come to us to receive best service and they have been besides us for a very long time. From the beginning when building a platform to maintenance process, we do them all with perfect result.
          </p>
        </div>
        <div className="col-md-6 ml-auto">
          <img src={isMobile ? servicesMobile : present} alt="present" />
        </div>
      </div>
    </section>
  );
};

export default ServicesDescription;
