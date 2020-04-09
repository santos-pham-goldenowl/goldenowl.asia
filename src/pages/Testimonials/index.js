import React, { createRef } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import './index.sass'
import MainHeader from 'components/MainHeader'
import SubHeader from 'components/SubHeader'
import BreadCrumb from 'components/BreadCrumb'
import Footer from 'components/Footer'
import FixedTopBreadCrumb from "components/FixedTopBreadCrumb";
import FixedTopHeader from "components/FixedTopHeader";

import TestimonialsStats from './components/TestimonialsStats'
import StatsSummary from './components/StatsSummary'
import TestimonialsList from './components/TestimonialsList'
import RunningPanels from './components/RunningPanels'

import stickyTrigger from "utils/stickyTrigger"
import useScrollDirection from "utils/hooks/useScrollDirection";


const Testimonials = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection()
  
  window.onscroll = () => stickyTrigger(scrollDirection)

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
)}

export default Testimonials
