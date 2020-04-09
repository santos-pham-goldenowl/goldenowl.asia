import React from 'react'

import working from 'assets/images/working.png'
import './index.sass'

const IntroductionDetail = () => (
  <section className="introduction-detail">
    <div className="row">
      <div className="col-12 col-md-6">
        <h3 className="introduction-detail__title">
          We are Golden Owl
        </h3>
        <div className="introduction-detail__content">
          <p>
            Golden Owl's leading mission is to turn customers' ideas into a useful technological platform for a variety of purposes from trade to company and project management. No matter how big or small your project is, our team here always work with high attention and discipline to bring client a perfect product with high quality of code and security.
          </p>
          <br />
          <p>
            We pride ourselves on having clients’ satisfaction on products we built. Our experiences are proven by more than 22 Mobile Applications and 38 Websites projects across 6 countries in the world, including the U.K, America, Singapore, etc.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-5 ml-auto">
        <div className="img-wrapper">
          <img src={working} alt="working" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
)


export default IntroductionDetail
