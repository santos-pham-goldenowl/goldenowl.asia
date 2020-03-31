import React from 'react'

import ArrowRight from '../../../../components/ArrowRight'
import laptop from '../../../../assets/images/3.png'

import './index.sass'
import { Link } from 'react-router-dom'

const Explore = () => (
  <section className="explore-clone">
    <div className="explore-clone__card">
      <div className="explore-clone__top-content">
        <h6>BID4SKILL | FEATURES CASE STUDY</h6>
        <Link className="explore-clone__case-study" to="/portfolio/bid-4-skill">
          <h6>VIEW ALL CASE STUDY</h6>
          <ArrowRight className="explore-clone__arrow" />
        </Link>
      </div>
      <p className="explore-clone__description">Lorem ipsum dolor sit amet, iudico oratio eos<br /> ex. Duo ludu.</p>
      <div className="explore-clone__image-wrapper">
        <img className="explore-clone__image" src={laptop} alt="computer" loading="lazy" />
      </div>
    </div>
  </section>
)

export default Explore
