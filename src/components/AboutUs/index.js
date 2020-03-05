import React from 'react';

import research from '../../assets/images/research.png';
import bg from '../../assets/images/about_bg.png';
import './index.sass';

const AboutUs = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '100vw',
  };

  return (
    <section className="about-us" style={sectionStyle}>
      <div className="col-lg-5 about-us__left-side">
        <h2>About us</h2>
        <p>
        We are Golden Owl Consulting, a HCM-Singapore join venture group established in November, 2015 in Ho Chi Minh City. We specialize in web and mobile development with the latest Ruby on Rails and Javascript technologies.
          <br />
          <br />
        We provide fast, reliable, and professional software outsourcing, IT service consulting, website designing, and automation testing.
        </p>
      </div>
      <div className="col-lg-7 about-us__right-side">
        <img src={research} alt="research" loading="lazy" />
      </div>
    </section>
  );
};

export default AboutUs;
