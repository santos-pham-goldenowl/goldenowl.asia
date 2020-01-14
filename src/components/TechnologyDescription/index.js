import React from 'react';
import technology from '../../assets/images/technology-cover.png';
import './index.sass';

const TechnologyDescription = () => {
  return(
    <section className="technology-description">
      <div className="technology-description__left-side">
        <h1>Technology</h1>
        <p>
        Lorem ipsum dolor sit amet, mea denique molestiae at, homero dicunt eripuit ad vel. Nonumy reformidans contentiones eu pro, autem nemore nec ex. An pro accumsan .
        </p>
        <p>
          Hinc malorum cu mel, nisl consequat mei an, eos ne zril rationibus. Ut commodo lobortis duo. Pro te tale fuisset, ei omnesque probatus eleifend mei. Civibus indoctum cum ad, sit et expetenda consequat definitiones, sea justo deserunt interpretaris id. In eam blandit hendrerit.
        </p>
      </div>
      <div className="technology-description__right-side">
        <img src={technology} alt="technology description" />
      </div>
    </section>
  );
}

export default TechnologyDescription;
