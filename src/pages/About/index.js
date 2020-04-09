import React, { createRef } from "react";
import Helmet from "react-helmet";

import MainHeader from "components/MainHeader";
import SubHeader from "components/SubHeader";
import Footer from "components/Footer";
import Partners from "components/Partners";
import BreadCrumb from "components/BreadCrumb";
import FixedTopBreadCrumb from "components/FixedTopBreadCrumb";
import FixedTopHeader from "components/FixedTopHeader";

import AboutUs from "./components/AboutUs";
import Success from "./components/Success";
import Develop from "./components/Develop";
import IntroductionDetail from "./components/IntroductionDetail";
import stickyTrigger from "utils/stickyTrigger"
import useScrollDirection from "utils/hooks/useScrollDirection";

import "./index.sass";

const About = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection()
  
  window.onscroll = () => stickyTrigger(scrollDirection)

  return (
    <section className="about-container">
      <Helmet>
        <title>About Us - Golden Owl</title>
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <p>About us</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <p>About us</p>
        </BreadCrumb>
        <AboutUs />
        <IntroductionDetail />
        <Success />
        <Develop />
        <Partners />
        <Footer />
      </div>
    </section>
  );
};
export default About;
