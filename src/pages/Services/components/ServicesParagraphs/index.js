import React from 'react'

import { ServicesDetailParagraphs } from '../../../../utils/ServicesDetail'
import objectToArray from '../../../../utils/objectToArray'
import './index.sass'

const ServicesParagraphs = () => (
    <section className="services-paragraphs row">
      {objectToArray(ServicesDetailParagraphs).map((paragraph) => (
        <div className="col-md-6">
          <div className="card">
              <h4>{paragraph.key}</h4>
              <p>{paragraph.content}</p>
          </div>
        </div>
      ))}
    </section>
)

export default ServicesParagraphs
