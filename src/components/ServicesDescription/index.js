import React from 'react';
import present from '../../assets/images/service_description.png';
import './index.sass';

const ServicesDescription = () => {
  return (
    <section className="services-description">
      <div className="services-description__left-side">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet, mea denique molestiae at, homero dicunt eripuit ad vel. Nonumy reformidans contentiones eu pro, autem nemore nec ex. An pro accumsan .
        </p>
        <p>
          Hinc malorum cu mel, nisl consequat mei an, eos ne zril rationibus. Ut commodo lobortis duo. Pro te tale fuisset, ei omnesque probatus eleifend mei. Civibus indoctum cum ad, sit et expetenda consequat definitiones, sea justo deserunt interpretaris id. In eam blandit hendrerit.
        </p>
      </div>
      <div className="services-description__right-side">
        <img src={present} alt="present" />
      </div>
    </section>
  );
}

export default ServicesDescription;
