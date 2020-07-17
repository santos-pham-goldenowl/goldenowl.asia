import React from 'react';

import bg from '../../../../assets/images/wavy_bg_2.png';
import research from '../../../../assets/images/research.png';
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
      <div className="about-us__left-side" data-aos="fade-right">
        <h2>A team of experts</h2>
        <p>
          We are Golden Owl - a well-established agile software outsourcing company who builds successful,
          scalable products that empower your business. Started in 2015 as a Vietnam - Singapore joint-venture,
          now we are expanding and operating in Vietnam, Singapore, Australia and Norway.
          <br />
          <br />
          Our work focuses on innovative, time-tested software development solutions.
          You can always count on our expertise, effective communication and our commitment
          to your projects.
        </p>
      </div>
      <div className="about-us__right-side" data-aos="fade-left">
        <img src={research} alt="research" loading="lazy" />
      </div>
    </section>
  );
};

export default AboutUs;
