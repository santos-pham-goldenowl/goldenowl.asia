import React from 'react';

import bg from '../../../../assets/images/about_bg.png';
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
      <div className="about-us__left-side">
        <h2>About us</h2>
        <p>
          “OUR GOAL IS TO MAKE YOUR BUSINESS IDEAS BECOME POSSIBLE WITH TECHNOLOGY SOLUTIONS.”
          <br />
          <br />
          When it comes to the development of web and mobile applications, Golden Owl offers fabulous solutions with highly dedicated and professional developers.
        </p>
      </div>
      <div className="about-us__right-side">
        <img src={research} alt="research" loading="lazy" />
      </div>
    </section>
  );
};

export default AboutUs;
