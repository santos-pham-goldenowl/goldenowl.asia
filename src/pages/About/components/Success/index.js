/* eslint-disable  max-len */

import React from 'react';

import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import map from '../../../../assets/images/map.svg';
import './index.sass';

const Success = () => {
  const isMobile = useMobileWidth();

  return (
    <section className="success">
      <div className="row success__main">
        <div className="col-12 col-md-6">
          <h1 className="success__main-title">
            Our Business
          </h1>
        </div>
        <div className="col-12 col-md-6 success__main-description">
          <p>
            Golden Owl is a Vietnam – Singapore joint venture company which provides IT outsourcing services focusing on customers’ needs.
            <br />
            <br />
            Established in 2015 with a small team based in Ho Chi Minh City (Vietnam), now we are expanding with more than 60 full-time developers, operating in Vietnam, Singapore, Australia, and Norway. Our clients are from different industries such as beauty and wellness, real estate, ecommerce, education, travel and hospitality, finance, marketing … across the globe.
          </p>
        </div>
      </div>
      <div className="row success__sum">
        <div className="col-12 col-md-6">
          <h3>
            {/* {isMobile ? 'Our company' : '30+ mobile application' } */}
            Our Services
          </h3>
          <p className="success__left-side success__paragraph">
            Are you
            <br />
            <br />
            … in need of dynamic interface, easy to use and responsive mobile app? Our front-end developers are passionate to help.
            <br />
            <br />
            … looking for a trustable partner to build a revenue-generating website? Our back-end developers will de-risk your investment and make it easy for you to build, grow and scale your platform later.
            <br />
            <br />
            … seeking to overcome the challenges of digital transformation? We have a team who can help with innovation and emerging technologies into your current business.
            <br />
            <br />
            With vast experience in all technologies through more than 50 projects, we demonstrated confidence in offering full-stack solutions for our customers. Golden Owl’s technologists specialize not only in mobile app and website development, but also in UI/UX designing, automation testing and IT consulting. Our experts focus on creating impactful solutions which fit client’s needs perfectly.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <h3>
            {/* 45+ websites */}
            What make us unique
          </h3>
          <p className="success__paragraph">
            Technology is our core. We have experienced developers that offer accelerated performance. We build products in Laravel, Node.JS, Ruby on Rails and React Native.
            <br />
            <br />
            Our team applies Agile methodology in product development which is more flexible and helps to shorten the delivery time.
            <br />
            <br />
            Not convinced yet? We also bring together our best project assistants to help you figure out the problem and satisfy all your business requirements.
            <br />
            <br />
            A professional outsourcing company can save you a considerable amount of time and money and provide you with the latest industry insights and advanced technologies. The keys to success are the reliability and relevant experience of a consultancy you are going to partner with.
            <br />
            <br />
            Looking for your next success story? We are here to help!
          </p>
        </div>
        <div className="col-12 col-md-6" />
        <div className="col-12 col-md-6">
          {/* <h3>
            7 countries
          </h3>
          <p className="success__paragraph">
            We are proud of being a well-known enterprise which can work together with clients coming from Singapore, UK, America, etc.
          </p> */}
          <img className="success__map" src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Success;
