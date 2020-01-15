import React from 'react';
import present from '../../assets/images/service_description.png';
import './index.sass';

const ServicesDescription = () => {
  return (
    <section className="services-description">
      <div className="services-description__left-side">
        <h1 className="services-description__title">Services</h1>
        <p className="services-description__text">
          We provide software solutions, mostly about website and mobile applications for a wide variety of fields, from finance to commerce and so on. We are proud of being very selective and have one of the best full-stacked developer training programs in Ho Chi Minh City.
        </p>
      </div>
      <div className="services-description__right-side">
        <img src={present} alt="present" />
      </div>
    </section>
  );
}

export default ServicesDescription;
