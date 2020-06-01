import React from 'react';
import Helmet from 'react-helmet';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PortfolioHeader from '../../components/PortfolioHeader';
import PortfolioInteresting from '../../components/PortfolioInteresting';

import allTab, { mobileTab, webTab } from '../../utils/portfolioTabContent';

import companyLogo from '../../assets/images/GoldenOwlLogo.png';
import './index.sass';

const Portfolio = () => {
  const projectRender = (data) => data.map((item) => (
    <div key={item.url} className="col-md-6">
      <Link to={`/portfolio/${item.url}`}>
        <div
          className="portfolio__tab__card"
        >
          <img src={item.img} alt={item.url} />
          <h4 className={item.isWhite && 'white-title'}>
            {item.content}
          </h4>
        </div>
      </Link>
    </div>
  ));

  return (
    <section className="portfolio">
      <Helmet>
        <title>Portfolio - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." name="description" /><meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." property="og:description" />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
      </Helmet>
      <div className="container-fluid no-padding">
        <PortfolioHeader />
        <section className="portfolio__priority">
          <h1>Our clients’ satisfaction is always our priority</h1>
          <div className="row">
            <div className="col-md-5 portfolio__priority__left-paragraph">
              <p>
                We are HCMC-Singapore joint venture group focusing on helping
                customers turn their ideas into the website.
              </p>
            </div>
            <div className="col-md-6 ml-auto portfolio__priority__right-paragraph">
              <p>
                Since founded date, Golden Owl has been constantly growing and
                affirming its value with high performance, which is not only
                impressive and professional but also convenient and popular among
                clients.
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio__project">
          <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
            <Tab eventKey="all" title="All">
              <div className="row portfolio__tab">
                {projectRender(allTab)}
              </div>
            </Tab>
            <Tab eventKey="web" title="Web development">
              <div className="row portfolio__tab">
                {projectRender(webTab)}
              </div>
            </Tab>
            <Tab eventKey="mobile" title="Mobile development">
              <div className="row portfolio__tab">
                {projectRender(mobileTab)}
              </div>
            </Tab>
          </Tabs>
        </section>
        <PortfolioInteresting />
      </div>
    </section>
  );
};

export default Portfolio;
