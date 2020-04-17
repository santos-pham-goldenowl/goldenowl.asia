import React, { createRef } from 'react';
import Helmet from 'react-helmet';

import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import Explore from '../../components/Explore';
import Contact from '../../components/Contact';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';

import ServicesDetail from './components/ServicesDetail';
import ServicesParagraphs from './components/ServicesParagraphs';
import ServicesDescription from './components/ServicesDescription';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import './index.sass';

const Services = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="services-container">
      <Helmet>
        <title>Services - Golden Owl</title>
        <link href="https://www.goldenowl.asia/home/amp" rel="amphtml" />
        <link href="https://www.goldenowl.asia/home/home" rel="canonical" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug" name="google-site-verification" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." name="description" /><meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." property="og:description" />
        <meta content="http://www.goldenowl.asia/assets/background-home.jpg" property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <p>Services</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <p>Services</p>
        </BreadCrumb>
        <ServicesDescription />
        <ServicesDetail />
        <ServicesParagraphs />
        <Contact />
        <Explore />
        <Footer />
      </div>
    </section>
  );
};

export default Services;
