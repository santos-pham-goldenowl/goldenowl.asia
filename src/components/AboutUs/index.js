import React from 'react';
import research from '../../assets/images/research.png';
import './index.sass';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__left-side">
        <h1>About Us</h1>
        <p className="about-us__text">
          Lorem ipsum dolor sit amet, mea denique molestiae at, homero dicunt eripuit ad vel. Nonumy reformidans contentiones eu pro, autem nemore nec ex. An pro accumsan.
        </p>
        <p className="about-us__text">
          Hinc malorum cu mel, nisl consequat mei an, eos ne zril rationibus. Ut commodo lobortis duo. Pro te tale fuisset, ei omnesque probatus eleifend mei. Civibus indoctum cum ad, sit et expetenda consequat definitiones, sea justo deserunt interpretaris id. In eam blandit hendrerit.
        </p>
      </div>
      <div className="about-us__right-side">
        <img src={research} alt="research" />
      </div>
    </section>
  );
}

export default AboutUs;
