import React from 'react';

import bg from '../../../../assets/images/wavy_bg_2.png';
import technology from '../../../../assets/images/technology-cover.png';
import mTechnology from '../../../../assets/images/mTechnology.png';

import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import './index.sass';

const TechnologyDescription = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '100vw',
  };

  const isMobile = useMobileWidth();

  return (
    <section className="technology-description" style={sectionStyle}>
      <div className="row">
        <div className="col-md-6 technology-description__left-side" data-aos="fade-right">
          <h2>Technology</h2>
          <p>
            <strong>We excel in technologies which are truly battle-tested and bring to the table what fits best for clients needs.</strong>
            <br />
            <br />
            Technology is our core. We keep our talented engineers up-to-date with the latest technologies and trends.
            However that doesn’t mean we choose technologies just because they’re new or trendy. We use those which are
            stable, reliable and battle-tested.
            <br />
            <br />
            With the expertise in a wide range of programming languages especially Ruby on Rails, Javascript and PHP,
            also popular frameworks and platforms, we know exactly which tool can help you achieve your business goals
            and solve the problems of your end-users.
          </p>
        </div>
        <div className="col-md-6 ml-auto d-block technology-description__right-side" data-aos="fade-left">
          <img src={isMobile ? mTechnology : technology} alt="technology description" />
        </div>
      </div>
    </section>
  );
};

export default TechnologyDescription;
