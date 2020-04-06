import React from 'react'

import MainHeader from 'components/MainHeader'
import SubHeader from 'components/SubHeader'
import Footer from 'components/Footer'
import Explore from 'components/Explore'
import Contact from 'components/Contact'
import BreadCrumb from 'components/BreadCrumb'

import ServicesDescription from './components/ServicesDescription'
import ServicesDetail from './components/ServicesDetail'
import ServicesParagraphs from './components/ServicesParagraphs'

import './index.sass'

const Services = () => (
  <section className="services-container">
    <div className="container-fluid no-padding">
      <MainHeader />
      <SubHeader />
      <BreadCrumb>
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
)

export default Services
