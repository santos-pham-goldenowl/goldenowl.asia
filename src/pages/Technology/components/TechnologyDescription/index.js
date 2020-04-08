import React from 'react'

import bg from 'assets/images/wavy_bg_2.png'
import technology from 'assets/images/technology-cover.png'
import mTechnology from 'assets/images/mTechnology.png'
import useMobileWidth from 'utils/hooks/useMobileWidth'

import './index.sass'

const TechnologyDescription = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '100vw',
  }

  const isMobile = useMobileWidth()

  return (
    <section className="technology-description" style={sectionStyle}>
      <div className="row">
        <div className="col-md-6 technology-description__left-side">
          <h2>Technology</h2>
          <p>
            By using many programming languages such as Ruby on Rails,
            Javascript and PHP and best platforms, we have built lots of
            incredible projects in a variety of fields and achieve reliability
            from clients. One way or another we try our best to update the most
            up-to-date technology to catch up with the acceleration of
            technology.
            <br />
            <br />
            Using the right, suitable and technology in building a software
            product is very important because it may affect to inside function
            as well as the stability. Hence, building a software product
            requires the developer a wide range of knowledge not only about how
            to build it but also about how to choose the right technology.
          </p>
        </div>
        <div className="col-md-6 ml-auto d-flex justify-content-end technology-description__right-side">
          <img src={isMobile ? mTechnology : technology} alt="technology description" />
        </div>
      </div>
    </section>
  )
}

export default TechnologyDescription
