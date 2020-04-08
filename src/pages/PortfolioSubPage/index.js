import React from 'react'
import Helmet from 'react-helmet'

import './index.sass'
import PortfolioHeader from 'components/PortfolioHeader'
import PortfolioInteresting from 'components/PortfolioInteresting'

const Services = ({ content }) => (
  <section>
    <Helmet>
      <title>{`${content.key} - Golden Owl`}</title>
    </Helmet>
    <div className="container-fluid no-padding">
      <PortfolioHeader />
      <section className="portfolio-details">
        <h1>{content.key}</h1>
        <div className="row">
          <div className="col-12 portfolio-details__cover">
            <img src={content.cover} alt={`${content.key} cover`} loading="lazy" />
          </div>
          <div className="col-12 portfolio-details__first-paragraph d-flex align-items-start">
            <h3 className="portfolio-details__item-title">Overview</h3>
            <p className="portfolio-details__item-content">
              {content.overview}
            </p>
          </div>
          <div className="col-12 portfolio-details__second-paragraph d-flex align-items-start">
            <h3 className="portfolio-details__item-title">
                Technologies
            </h3>
            <ul className="portfolio-details__item-content no-margin-bottom">
              {content.techs.map((item) => (
                <li key={item} className="d-flex">
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          {content.img.map((image, index) => (
            <div
              className={`${image.col > 4 ? 'col-12': 'col-6'} col-md-${image.col} portfolio-details__image`}
              key={`${content.key}-${index}`}
            >
              <img src={image.src} alt={`${content.key} img no.${index}`} loading="lazy" />
            </div>
          ))}
          <div className="col-md-12 portfolio-details__third-paragraph d-flex align-items-start">
            {content.brief.title}
            <p className="portfolio-details__item-content">
              {content.brief.description}
            </p>
          </div>
          <div className="col-12">
            <div className="portfolio-details__next-project">
              <h3>Up next: Personifi</h3>
              <p>Where to find the most suitable personal loan</p>
            </div>
          </div>
        </div>
      </section>
      <PortfolioInteresting />
    </div>
  </section>
)

export default Services
