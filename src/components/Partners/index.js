import React from 'react'

import SlideCarousel from '../SlideCarousel'
import partnersLogo from 'utils/partnersLogo'
import './index.sass'

const Partners = () => (
  <section className="partners">
    <h3 className="partners__title">
      We partner with the world's best
    </h3>
    <SlideCarousel content={partnersLogo} />
    <div id="mobile-display-section" className="row">
      {
        partnersLogo.map((item) => (
          <div className="col-6">
            <img src={item.url} alt={`GO ${item.name}`} id={item.name} />
          </div>
        ))
      }
    </div>
  </section>
)


export default Partners
