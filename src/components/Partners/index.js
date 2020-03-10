import React from 'react'

import SlideCarousel from '../SlideCarousel'
import partnersLogo from '../../utils/PartnersLogo'
import './index.sass'

const Partners = () => (
  <section className="partners">
    <h3 className="partners__title">
      We partner with the world's best
    </h3>
    <SlideCarousel content={partnersLogo} />
  </section>
)


export default Partners
