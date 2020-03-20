import React from "react";
import "./index.sass";
import PortfolioHeader from "../../components/PortfolioHeader";
import PortfolioInteresting from "../../components/PortfolioInteresting";

const Services = ({ content }) => {
  return (
    <section className="portfolio-details">
      <div className="container-fluid no-padding">
        <PortfolioHeader />
        <section className="portfolio-details__body">
          <h1>{content.key}</h1>
          <div className="row">
            <div className="col-12 portfolio-details__body__cover">
              <img src={content.cover} alt={`${content.key} cover`} loading="lazy" />
            </div>
            <div className="col-md-5 portfolio-details__body__first-paragraph">
              <h3 className="portfolio-details__body__item-title">Overview</h3>
            </div>
            <div className="col-md-7 portfolio-details__body__first-paragraph">
              <p className="portfolio-details__body__item-content">
                {content.overview}
              </p>
            </div>
            <div className="col-md-5 portfolio-details__body__second-paragraph">
              <h3 className="portfolio-details__body__item-title">
                Technology
              </h3>
            </div>
            <div className="col-md-7 portfolio-details__body__second-paragraph">
              <ul className="no-margin-bottom">
                {content.techs.map(item => (
                  <li key={item} className="portfolio-details__body__item-content list d-flex">
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            {content.img.map((image, index) => (
              <div
                className={`col-md-${image.col} portfolio-details__body__image`}
                key={`${content.key}-${index}`}
              >
                <img src={image.src} alt={`${content.key} img no.${index}`} loading="lazy" />
              </div>
            ))}
            <div className="col-md-5 portfolio-details__body__third-paragraph">
              <h3 className="portfolio-details__body__item-title">
                {content.brief.title}
              </h3>
            </div>
            <div className="col-md-7 portfolio-details__body__third-paragraph">
              <p className="portfolio-details__body__item-content">
                {content.brief.description}
              </p>
            </div>
            <div className="col-12">
              <div className="portfolio-details__body__next-project">
                <h3>Up next: Personifi</h3>
                <p>Where to find the most suitable personal loan</p>
              </div>
            </div>
          </div>
        </section>
        <PortfolioInteresting />
      </div>
    </section>
  );
};

export default Services;