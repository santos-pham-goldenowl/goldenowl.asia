/* eslint-disable  max-len */

import React from 'react';

import working from '../../../../assets/images/working.png';
import './index.sass';

const IntroductionDetail = () => (
  <section className="introduction-detail">
    <div className="row">
      <div className="col-12 col-md-6">
        <h3 className="introduction-detail__title">
          We are Golden Owl
        </h3>
        <div className="introduction-detail__content">
          <p>
            <strong>OUTSOURCED SOFTWARE DEVELOPMENT FROM CONCEPT TO DELIVERY</strong>
            <br/>
            <br/>
            We are a well-established agile software outsourcing company who builds successful, scalable products that empower your business.
            </p>
          <br />
          <p>
            Technology is our core. We have talented and dedicated engineers that offer accelerated performance. Our work focuses on innovative, time-tested software development solutions. You can always count on our expertise, effective communication and our commitment to your project.
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
