import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import Footer from '../../components/Footer';

import StatsSummary from './components/StatsSummary';
import RunningPanels from './components/RunningPanels';
import TestimonialsList from './components/TestimonialsList';
import TestimonialsStats from './components/TestimonialsStats';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import './index.sass';

const Testimonials = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="testimonials">
      <Helmet>
        <title>Testimonials - Golden Owl</title>
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <p>Testimonials</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/testimonial">Testimonials</Link>
        </BreadCrumb>
        <TestimonialsStats />
        <StatsSummary />
        <RunningPanels />
        <TestimonialsList />
        <Footer />
      </div>
    </section>
  );
};

export default Testimonials;
