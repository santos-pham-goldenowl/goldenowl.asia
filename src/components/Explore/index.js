import React from 'react'

import ArrowRight from '../ArrowRight'
import laptop from '../../assets/images/3.png'
import './index.sass'
import { Link } from 'react-router-dom'

const Explore = () => (
  <section className="explore">
    <div>
      <div className="explore__top-content">
        <h6>BID4SKILL | FEATURES CASE STUDY</h6>
          <Link className="explore__case-study" to="/portfolio/bid-4-skill">
            <h6>VIEW ALL CASE STUDY</h6>
            <ArrowRight className="explore__arrow" />
          </Link>
      </div>
      <p className="explore__description">Lorem ipsum dolor sit amet, iudico oratio<br />eos ex. Duo ludu.</p>
      <div className="explore__image-wrapper">
        <img className="explore__image" src={laptop} alt="computer" loading="lazy" />
      </div>
    </div>
  </section>
)

export default Explore
