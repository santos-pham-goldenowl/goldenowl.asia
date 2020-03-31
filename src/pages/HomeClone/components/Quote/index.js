import React from 'react'

import work from '../../../../assets/images/work.png'
import './index.sass'

const Quote = () => (
  <section className="quote-clone">
    <div className="row">
      <div className="col-md-5">
        <h1 className="quote-clone__content">
          “If you deprive yourself of offshore development and your competitors do not, you are putting yourself out of business”
        </h1>
        <div className="quote-clone__author">
          <strong className="quote-clone__text-bold">Lee Kuan Yew - </strong>
          <span>the first Prime Minister of Singapore.</span>
        </div>
      </div>
      <div className="col-md-7">
        <img src={work} alt="work" loading="lazy" />
      </div>
    </div>
  </section>
)

export default Quote
