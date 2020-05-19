import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";
import LoadingScreen from "../../components/LoadingScreen";

import stickyTrigger from "../../utils/stickyTrigger";
import useMobileWidth from "../../utils/hooks/useMobileWidth";
import useScrollDirection from "../../utils/hooks/useScrollDirection";

import { getAllCareers } from "../../api/careers";

import clock from "../../assets/images/clock.svg";
import noData from "../../assets/images/no-data.svg"
import "./index.sass";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loadStatus, setLoadStatus] = useState("init");
  const isMobile = useMobileWidth();

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    getAllCareers()
      .then((res) => {
        const { data } = res.data;

        if (data) {
          setJobs([...data.data]);
          setTimeout(() => setLoadStatus("loaded"), 500);
        }
      })
      .catch((err) => {
        console.log('err: ', err);
        setTimeout(() => setLoadStatus("no-result"), 500);
      });
  }, []);

  window.onscroll = () => stickyTrigger(scrollDirection);

  const statusRender = (filled) =>
    filled ? (
      <div className="job-status filled-job">Job Filled</div>
    ) : (
      <div className="job-status open-job">Open</div>
    );

  const defaultRowRender = (item) => (
    <tr>
      <td className="first-col">{statusRender(item.attributes.filled)}</td>
      <td className="second-col">
        <p className="careers__job">{item.attributes.title}</p>
      </td>
      <td className="third-col">
        <img className="clock" src={clock} alt="GO-clock" />
        <p className="d-inline careers__time">{item.attributes.job_type}</p>
      </td>
      <td className="fourth-col">
        <Link
          to={item.attributes.filled ? "" : `careers/details/${item.id}`}
          onClick={(e) => item.attributes.filled && e.preventDefault()}
        >
          View details
        </Link>
      </td>
    </tr>
  );

  const mobileRowRender = (item) => (
    <tr>
      <td>
        {statusRender(item.attributes.filled)}
        <p className="careers__job">{item.attributes.title}</p>
        <img className="clock" src={clock} alt="GO-clock" />
        <p className="d-inline careers__time">{item.attributes.job_type}</p>
        <Link
          className={item.attributes.filled ? "text-decoration-none" : ""}
          to={item.attributes.filled ? "" : `careers/details/${item.id}`}
          onClick={(e) => item.attributes.filled && e.preventDefault()}
        >
          View details
        </Link>
      </td>
    </tr>
  );

  const bodyRender = () => {
    switch (loadStatus) {
      case "loaded":
        return (
          <table className="table mb-0">
            <tbody>
              {jobs.map((item) =>
                isMobile ? mobileRowRender(item) : defaultRowRender(item)
              )}
            </tbody>
          </table>
        );
      case "no-result":
        return <img className="w-100 d-block" alt="GO-no-data" src={noData} />
      default:
        return <LoadingScreen />;
      }
  };

  return (
    <section className="careers">
      <Helmet>
        <title>Career - Golden Owl</title>
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
          {bodyRender()}
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Career;
