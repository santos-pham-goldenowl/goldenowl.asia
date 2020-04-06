import React from 'react'

import AutoCarousel from 'components/AutoCarousel'
import feedback from 'utils/Feedback'
import './index.sass'

const Feedback = () => (
  <section className="feedback-clone">
    <h3 className="feedback-clone__title">What our clients say</h3>
    <AutoCarousel content={feedback} />
  </section>
)

export default Feedback
