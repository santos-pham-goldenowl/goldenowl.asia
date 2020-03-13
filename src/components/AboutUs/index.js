import React from 'react';
import research from '../../assets/images/research.png';
import './index.sass';

const AboutUs = () => (
  <section className="about-us">
    <div className="about-us__left-side">
      <h2 className="heading-lg">About Us</h2>
      <p className="about-us__text text-xl">
        We are Golden Owl Consulting, a HCM-Singapore join venture group established in November, 2015 in Ho Chi Minh City. We specialize in web and mobile development with the latest Ruby on Rails and Javascript technologies.
      </p>
      <p className="about-us__text text-xl">
        We provide fast, reliable, and professional software outsourcing, IT service consulting, website designing, and automation testing.
      </p>
    </div>
    <div className="about-us__right-side">
      <img src={research} alt="research" loading="lazy" />
    </div>
  </section>
);

export default AboutUs;
