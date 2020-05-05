import React, { createRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";

import stickyTrigger from "../../utils/stickyTrigger";
import useMobileWidth from "../../utils/hooks/useMobileWidth";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import objectToArray from "../../utils/objectToArray";
import mockCareersData from "../../utils/mockCareersData";

import clock from "../../assets/images/clock.svg";
import "./index.sass";

const Career = ({ content }) => {
  const isMobile = useMobileWidth();

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  const statusRender = (filled) =>
    filled ? (
      <div className="job-status filled-job">Job Filled</div>
    ) : (
      <div className="job-status open-job">Open</div>
    );

  const defaultRowRender = (item) => (
    <tr>
      <td className="first-col">{statusRender(item.filled)}</td>
      <td className="second-col">
        <p className="careers__job">{item.key}</p>
      </td>
      <td className="third-col">
        <img className="clock" src={clock} alt="GO-clock" />
        <p className="d-inline careers__time">{item.time}</p>
      </td>
      <td className="fourth-col">
        <Link
          to={`careers/${item.url}`}
          onClick={(e) => item.filled && e.preventDefault()}
        >
          View details
        </Link>
      </td>
    </tr>
  );

  const mobileRowRender = (item) => (
    <tr>
      <td>
        {statusRender(item.filled)}
        <p className="careers__job">{item.key}</p>
        <img className="clock" src={clock} alt="GO-clock" />
        <p className="d-inline careers__time">{item.time}</p>
        <Link
          to={`careers/${item.url}`}
          onClick={(e) => item.filled && e.preventDefault()}
        >
          View details
        </Link>
      </td>
    </tr>
  );

  return (
    <section className="careers">
      <Helmet>
        <title>Career - Golden Owl</title>
        <link href="https://www.goldenowl.asia/home/amp" rel="amphtml" />
        <link href="https://www.goldenowl.asia/home/home" rel="canonical" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug"
          name="google-site-verification"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
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
        <meta
          content="http://www.goldenowl.asia/assets/background-home.jpg"
          property="og:image"
        />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <Link to="/careers">Careers</Link>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/careers">Careers</Link>
        </BreadCrumb>
        <section className="careers__list">
          <h2 className="careers__title">
            Careers at Golden Owl. From everything
          </h2>
          <table className="table mb-0">
            <tbody>
              {objectToArray(mockCareersData).map((item) =>
                isMobile ? mobileRowRender(item) : defaultRowRender(item)
              )}
            </tbody>
          </table>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Career;
