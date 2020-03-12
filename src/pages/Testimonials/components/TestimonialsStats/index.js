import React from 'react'

import './index.sass'
import objectToArray from '../../../../utils/objectToArray'
import testimonialsStats from '../../../../utils/testimonialsStats'

const TestimonialsStats = () => (
  <section className="testimonials-stats">
    <div className="testimonials-stats__wrapper">
      <h2 className="title">
        Overall, customers have reported some incredible results.
      </h2>
      <div className="row">
        {
          objectToArray(testimonialsStats).map(item => (
            <div key={item.key} className="col-md-3 stats">
              <h2>{item.number}<sup>{item.unit}</sup></h2>
              <p>{item.key}</p>
            </div>
          ))
        }
      </div>
    </div>
  </section>
)

export default TestimonialsStats
