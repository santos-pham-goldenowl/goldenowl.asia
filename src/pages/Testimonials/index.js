import React from 'react'
import { Link } from 'react-router-dom'

import './index.sass'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import TestimonialsStats from './components/TestimonialsStats'
import StatsSummary from './components/StatsSummary'
import TestimonialsList from './components/TestimonialsList'
import RunningPanels from './components/RunningPanels'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container-fluid no-padding">
        <MainHeader />
        <SubHeader />
        <BreadCrumb>
          <Link to="/testimonials">Testimonials</Link>
        </BreadCrumb>
        <TestimonialsStats />
        <StatsSummary />
        {/* to-do: animation */}
        {/* refer: https://styled-components.com/ */}
        <RunningPanels />
        {/* ---------------- */}
        <TestimonialsList />
        <Footer />
      </div>
    </section>
  )
}

export default Testimonials
