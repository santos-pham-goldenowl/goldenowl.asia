/* eslint-disable  max-len */

import React from 'react';

import working from '../../../../assets/images/working.png';
import './index.sass';

const IntroductionDetail = () => (
  <section className="introduction-detail">
    <div className="row">
      <div className="col-12 col-md-6">
        <h3 className="introduction-detail__title">
          We make your idea happen
        </h3>
        <div className="introduction-detail__content">
          <p>
            With experience through hundreds of projects, we demonstrated confidence in offering full-stack solutions for our clients.
            <br />
            <br />
            Our team is expertise not only in mobile app and website development, but also in UI/UX design, automation testing and IT consulting. We focus on creating impactful solutions that fit client’s needs perfectly.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-5 ml-auto">
        <div className="img-wrapper">
          <img src={working} alt="working" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroductionDetail;
