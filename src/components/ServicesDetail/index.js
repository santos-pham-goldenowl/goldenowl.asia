import React from 'react'
import { Link } from 'react-router-dom'

import { ServicesDetailContent, ServicesDetailParagraphs } from '../../utils/ServicesDetail'
import './index.sass'
import objectToArray from '../../utils/objectToArray'

const ServicesDetail = () => (
  <section className="services-detail">
    <div className="row justify-content-center services-detail__links">
      {objectToArray(ServicesDetailContent).map((content) => (
        <div className="col-md-4">
          <Link to={`/services/${content.link}`}>
            <div className="img-wrapper w-100">
              <img src={content.url} alt={content.key} />
            </div>
            <div className="card-content">
              <div className="row">
                <h5>{content.key}</h5>
              </div>
              <div className="row">
                <p>{content.content}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>

    <div className="row services-detail__paragraphs">
      {objectToArray(ServicesDetailParagraphs).map((paragraph) => (
        <div className="col-md-6">
          <div className="card">
            <div className="row">
              <h4>{paragraph.key}</h4>
            </div>
            <div className="row">
              <p>{paragraph.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ServicesDetail
