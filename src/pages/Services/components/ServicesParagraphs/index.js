import React from 'react'

import { ServicesDetailParagraphs } from 'utils/ServicesDetail'
import objectToArray from 'utils/objectToArray'

import './index.sass'

const ServicesParagraphs = () => (
  <section className="services-paragraphs">
    <div className="row">
      {objectToArray(ServicesDetailParagraphs).map((paragraph, index) => (
        <div id={`services-paragraph-${index}`} key={paragraph.key} className="col-12 col-md-6">
          <div className="card">
            <h4>{paragraph.key}</h4>
            <p>{paragraph.content}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ServicesParagraphs
