import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./index.sass";
import PortfolioHeader from "../../components/PortfolioHeader";
import tabContent from "../../utils/portfolioTabContent";
import PortfolioInteresting from "../../components/PortfolioInteresting";

const Portfolio = () => (
  <section className="portfolio">
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
        {/* start tab */}
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          <Tab eventKey="all" title="All">
            <div className="row">
              {tabContent.map((item, index) => (
                <div className="col-md-6">
                  <div
                    className="portfolio__card"
                    style={{
                      marginLeft: index % 2 === 0 ? "auto" : 0,
                      marginLeft: index % 2 === 0 ? 0 : "auto",
                      backgroundImage: `url(${item.img})`
                    }}
                  >
                    <h4
                      style={{
                        color: item.isWhite ? "#fff" : "#3e403d"
                      }}
                    >
                      {item.content}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="web" title="Web development">
            <div className="row">
              {[...tabContent].reverse().map((item, index) => (
                <div className="col-md-6">
                  <div
                    className="portfolio__card"
                    style={{
                      marginLeft: index % 2 === 0 ? "auto" : 0,
                      marginLeft: index % 2 === 0 ? 0 : "auto",
                      backgroundImage: `url(${item.img})`
                    }}
                  >
                    <h4
                      style={{
                        color: item.isWhite ? "#fff" : "#3e403d"
                      }}
                    >
                      {item.content}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="mobile" title="Mobile development">
            <div className="row">
              {tabContent.map((item, index) => (
                <div className="col-md-6">
                  <div
                    className="portfolio__card"
                    style={{
                      marginLeft: index % 2 === 0 ? "auto" : 0,
                      marginLeft: index % 2 === 0 ? 0 : "auto",
                      backgroundImage: `url(${item.img})`
                    }}
                  >
                    <h4
                      style={{
                        color: item.isWhite ? "#fff" : "#3e403d"
                      }}
                    >
                      {item.content}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>{" "}
        {/* end tab */}
      </section>
      <PortfolioInteresting />
    </div>
  </section>
);

export default Portfolio;
