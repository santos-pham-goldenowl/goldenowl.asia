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
