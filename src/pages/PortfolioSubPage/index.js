import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import PortfolioHeader from "../../components/PortfolioHeader";
import PortfolioInteresting from "../../components/PortfolioInteresting";

import randomProjects from "../../utils/portfolioTabContent";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

import companyLogo from "../../assets/images/GoldenOwlLogo.png";
import "./index.sass";

const PortfolioSubPage = ({ content }) => {
  const [prevProject, setPrevProject] = useLocalStorage("prevProject", "none");

  const filteredRandomProject = [...randomProjects]

  // exclude current & previous
  for (let i = filteredRandomProject.length - 1; i >= 0; i--) {
    if (
      filteredRandomProject[i].content.includes(content.key) ||
      filteredRandomProject[i].content.includes(prevProject)
    ) {
      filteredRandomProject.splice(i, 1);
    }
  }

  const randomProject =
    filteredRandomProject[Math.floor(Math.random() * filteredRandomProject.length)];

  const randomProjectText = randomProject.content.split(" – ");
  const randomProjectUrl = randomProject.url;
  const randomProjectThumb = randomProject.thumb;

  const nextProjectBg = { 
    backgroundImage: `url(${randomProjectThumb})`, 
  }

  return (
    <section>
      <Helmet>
        <title>{`${content.key} - Golden Owl`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug"
          name="google-site-verification"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our PortfolioSubPages include web development, mobile development, head hunting and more."
          name="description"
        />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          property="og:description"
        />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div className="container-fluid no-padding">
        <PortfolioHeader />
        <section className="portfolio-details">
          <h1>{content.key}</h1>
          <div className="row">
            <div className="col-12 portfolio-details__cover">
              <img
                src={content.cover}
                alt={`${content.key} cover`}
                loading="lazy"
              />
            </div>
            <div className="col-12 portfolio-details__first-paragraph d-flex align-items-start">
              <h3 className="portfolio-details__item-title">Overview</h3>
              <p className="portfolio-details__item-content">
                {content.overview}
              </p>
            </div>
            <div className="col-12 portfolio-details__second-paragraph d-flex align-items-start">
              <h3 className="portfolio-details__item-title">Technologies</h3>
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
                className={`${image.col > 4 ? "col-12" : "col-6"} col-md-${
                  image.col
                } portfolio-details__image`}
                key={`${content.key}-${index}`}
              >
                <img
                  src={image.src}
                  alt={`${content.key} img no.${index}`}
                  loading="lazy"
                />
              </div>
            ))}
            <div className="col-md-12 portfolio-details__third-paragraph d-flex align-items-start">
              {content.brief.title}
              <p className="portfolio-details__item-content">
                {content.brief.description}
              </p>
            </div>
            <div className="col-12">
              <Link
                onClick={() => {
                  setPrevProject(content.key);
                }}
                to={`/portfolio/${randomProjectUrl}`}
              >
                <div style={nextProjectBg} className="portfolio-details__next-project">
                  <h3>{`Up next: ${randomProjectText[0]}`}</h3>
                  <p>{randomProjectText[1]}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <PortfolioInteresting />
      </div>
    </section>
  );
};

export default PortfolioSubPage;
