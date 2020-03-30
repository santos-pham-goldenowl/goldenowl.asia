import React from 'react'

import code from '../../../../assets/images/code.png'
import './index.sass'

const Develop = () => (
  <section className="develop">
    <h2 className="develop__title">
      Develop with tools you
      <br />
      already love
    </h2>
    <div className="row develop__content">
      <div className="col-12 col-md-4 develop__content-text">
        <h3>
          Work with your beloved and familiar language
        </h3>
        <p>
          Golden Owl - we have a team that is expert at different programming languages so whatever your favourite language is, we are always here to turn it into your wanted product.
        </p>
      </div>
      <div className="col-12 col-md-7 ml-auto image-wrapper">
        <div className="rectangle" />
        <img className="develop__image" src={code} alt="code" />
      </div>
    </div>
  </section>
)

export default Develop
