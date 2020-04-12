import React, { createRef } from 'react';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';

import Guarantee from './components/Guarantee';
import TechnologyCards from './components/TechnologyCards';
import TechnologyDetail from './components/TechnologyDetail';
import TechnologyDescription from './components/TechnologyDescription';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import './index.sass';

const TechnologyContainer = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="technology-container">
      <Helmet>
        <title>Technology - Golden Owl</title>
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <p>Technology</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <p>Technology</p>
        </BreadCrumb>
        <TechnologyDescription />
        <Guarantee />
        <TechnologyDetail />
        <TechnologyCards />
        <Footer />
      </div>
    </section>
  );
};

export default TechnologyContainer;
