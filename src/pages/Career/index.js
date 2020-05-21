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

import {
  LOADING_STATUS,
  LOADED_STATUS,
  NO_RESULT_STATUS,
  OPEN_JOB_STATUS,
} from "../../constant";

import { getAllCareers } from "../../api/careers";

import clock from "../../assets/images/clock.svg";
import "./index.sass";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loadStatus, setLoadStatus] = useState(LOADING_STATUS);
  const isMobile = useMobileWidth();

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    getAllCareers()
      .then((res) => {
        const { data } = res.data;

        if (data) {
          setJobs([...data.data]);
          setTimeout(() => setLoadStatus(LOADED_STATUS), 500);
        }
      })
      .catch((err) => {
        console.log('err: ', err);
        setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      });
  }, []);

  window.onscroll = () => stickyTrigger(scrollDirection);

  const statusRender = (status) =>
    status === OPEN_JOB_STATUS ? (
      <div className="job-status open-job">{status}</div>
    ) : (
      <div className="job-status filled-job">{status}</div>
    );

  const defaultRowRender = (item) => (
    <tr>
      <td className="first-col">{statusRender(item.attributes.status)}</td>
      <td className="second-col">
        <p className="careers__job">{item.attributes.title}</p>
      </td>
      <td className="third-col">
        <img className="clock" src={clock} alt="GO-clock" />
        <p className="d-inline careers__time">{item.attributes.job_type}</p>
      </td>
      <td className="fourth-col">
        <Link
          className={item.attributes.status !== OPEN_JOB_STATUS ? "text-decoration-none" : ""}
          to={item.attributes.status !== OPEN_JOB_STATUS ? "" : `careers/details/${item.id}`}
          onClick={(e) => item.attributes.status !== OPEN_JOB_STATUS && e.preventDefault()}
        >
          View details
        </Link>
      </td>
    </tr>
  );

  const mobileRowRender = (item) => (
    <tr>
      <td>
        {statusRender(item.attributes.status)}
        <p className="careers__job">{item.attributes.title}</p>
        <img className="clock" src={clock} alt="GO-clock" />
        <p className="d-inline careers__time">{item.attributes.job_type}</p>
        <Link
          className={item.attributes.status !== OPEN_JOB_STATUS ? "text-decoration-none" : ""}
          to={item.attributes.status !== OPEN_JOB_STATUS ? "" : `careers/details/${item.id}`}
          onClick={(e) => item.attributes.status !== OPEN_JOB_STATUS && e.preventDefault()}
        >
          View details
        </Link>
      </td>
    </tr>
  );

  const bodyRender = () => {
    switch (loadStatus) {
      case LOADED_STATUS:
        return (
          <table className="table mb-0">
            <tbody>
              {jobs.map((item) =>
                isMobile ? mobileRowRender(item) : defaultRowRender(item)
              )}
            </tbody>
          </table>
        );
      case NO_RESULT_STATUS:
        return (
          <center>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="75%" height="auto" viewBox="0 0 5120 3340" preserveAspectRatio="xMidYMid meet">
              <g id="layer101" fill="#f9be39" stroke="none">
                <path d="M2635 3240 l-101 -100 -870 0 c-972 0 -914 4 -914 -69 0 -73 7 -76 195 -79 167 -3 167 -3 159 -25 -5 -12 -10 -501 -11 -1087 l-3 -1064 25 -53 c15 -29 44 -68 67 -87 61 -53 112 -66 253 -66 l122 0 7 -67 c13 -122 66 -204 161 -249 l50 -24 885 1 c651 0 893 4 917 12 60 22 117 72 148 128 l30 54 3 1044 c2 876 0 1052 -12 1093 l-14 48 195 0 c193 0 194 0 218 25 14 13 25 36 25 50 0 14 -11 37 -25 50 l-24 25 -421 0 -420 0 0 58 c-1 31 -7 74 -14 95 -13 36 -13 37 11 37 32 0 73 42 73 75 0 14 -11 37 -25 50 -24 25 -26 25 -208 25 l-185 0 6 45 c6 54 -11 97 -50 130 -24 21 -40 25 -90 25 l-61 0 -102 -100z m-272 -272 c-31 -34 -43 -63 -43 -100 0 -25 -8 -42 -29 -62 l-28 -27 -35 20 c-74 44 -149 63 -248 63 -150 0 -254 -44 -353 -151 -88 -96 -126 -193 -127 -326 0 -136 45 -248 138 -341 66 -66 172 -120 265 -136 247 -41 497 128 548 370 24 118 -3 281 -61 362 l-19 27 30 29 c17 16 38 29 47 30 9 1 30 2 46 3 23 1 57 28 161 132 l133 131 137 -4 137 -3 34 -37 34 -38 0 -1032 c0 -999 -1 -1034 -19 -1064 -41 -67 -12 -65 -946 -62 -784 3 -843 4 -868 21 -15 9 -35 29 -44 44 -17 25 -18 92 -21 1033 -2 688 0 1017 8 1042 5 20 26 50 45 67 l36 31 531 0 531 0 -20 -22z m-238 -287 c116 -57 187 -169 186 -296 -1 -102 -36 -181 -112 -249 -67 -61 -120 -81 -219 -81 -102 0 -155 21 -228 89 -142 133 -142 349 0 481 106 100 242 120 373 56z m1422 -51 c67 -41 64 29 61 -1109 l-3 -1030 -30 -31 c-16 -17 -45 -35 -65 -41 -23 -7 -319 -9 -872 -7 -828 3 -837 3 -865 24 -38 28 -63 80 -63 132 l0 42 673 0 c757 0 732 -2 810 73 23 23 51 60 62 82 19 39 20 66 23 963 l2 922 118 0 c98 0 122 -3 149 -20z"/>
                <path d="M1535 1768 c-28 -16 -35 -28 -35 -65 0 -20 8 -41 20 -53 19 -19 33 -20 290 -20 257 0 271 1 290 20 30 30 27 83 -6 109 -25 20 -39 21 -283 21 -172 -1 -263 -4 -276 -12z"/>
                <path d="M1550 1433 c-33 -12 -50 -37 -50 -74 0 -72 -26 -69 615 -69 640 0 615 -3 615 68 -1 85 20 82 -612 81 -304 0 -560 -3 -568 -6z"/>
                <path d="M1517 1072 c-10 -10 -17 -35 -17 -55 0 -68 -5 -67 445 -67 452 0 445 -1 445 69 0 73 14 71 -447 71 -384 0 -411 -1 -426 -18z"/>
                <path d="M85 3115 c-14 -13 -25 -36 -25 -50 0 -14 11 -37 25 -50 l24 -25 231 0 231 0 24 25 c14 13 25 36 25 50 0 14 -11 37 -25 50 l-24 25 -231 0 -231 0 -24 -25z"/>
                <path d="M452 2448 c-7 -7 -12 -29 -12 -50 0 -36 -1 -38 -33 -38 -44 0 -70 -20 -65 -51 3 -21 9 -24 50 -27 l47 -3 3 -47 c3 -44 5 -47 32 -50 35 -4 46 10 46 61 l0 37 45 0 c40 0 45 3 51 27 9 33 -15 53 -63 53 -30 0 -33 3 -33 31 0 58 -36 89 -68 57z"/>
                <path d="M4970 2182 c-23 -8 -30 -23 -30 -64 l0 -38 -45 0 c-40 0 -45 -3 -51 -27 -9 -33 15 -53 63 -53 31 0 33 -2 33 -34 0 -19 7 -42 16 -50 33 -33 64 -11 64 46 0 36 1 38 33 38 44 0 70 20 65 51 -3 21 -9 24 -50 27 l-48 3 0 44 c0 46 -19 68 -50 57z"/>
                <path d="M137 1290 c-44 -13 -95 -57 -117 -100 -27 -53 -27 -147 0 -201 73 -142 297 -142 370 1 27 53 27 147 0 200 -44 86 -155 129 -253 100z m136 -141 c36 -39 36 -79 -2 -121 -22 -25 -36 -32 -66 -32 -30 0 -44 7 -66 32 -35 39 -37 79 -8 116 42 54 95 56 142 5z"/>
                <path d="M4360 879 c-82 -33 -130 -105 -130 -195 0 -79 30 -138 88 -175 165 -104 362 30 321 220 -12 59 -59 117 -113 142 -44 20 -126 24 -166 8z m113 -110 c62 -32 75 -99 28 -151 -39 -44 -93 -44 -133 1 -34 38 -36 78 -7 115 33 42 73 55 112 35z"/>
                <path d="M776 395 c-11 -12 -16 -34 -16 -76 l0 -59 -59 0 c-66 0 -91 -15 -91 -55 0 -40 25 -55 91 -55 l59 0 0 -56 c0 -74 12 -94 55 -94 46 0 65 29 65 97 l0 53 59 0 c65 0 91 15 91 54 0 38 -30 56 -93 56 l-57 0 0 48 c0 65 -18 96 -56 100 -19 2 -38 -3 -48 -13z"/>
              </g>
            </svg>
          </center>
        )
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
