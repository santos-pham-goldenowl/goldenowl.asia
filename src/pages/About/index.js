import React, { createRef } from 'react';
import Helmet from 'react-helmet';

import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';

import AboutUs from './components/AboutUs';
import Success from './components/Success';
import Develop from './components/Develop';
import IntroductionDetail from './components/IntroductionDetail';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import { HEADER_DESCRIPTION } from '../../constant';

import companyLogo from '../../assets/images/GoldenOwlLogo.png';
import './index.sass';

const About = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="about-container">
      <Helmet>
        <title>About Us - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={HEADER_DESCRIPTION} name="description" />
        <meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content={HEADER_DESCRIPTION} property="og:description" />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
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
