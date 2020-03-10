import React from 'react'

import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Explore from '../../components/Explore'
import Contact from '../../components/Contact'
import BreadCrumb from '../../components/BreadCrumb'
import ServicesDescription from '../../components/ServicesDescription'
import ServicesDetail from '../../components/ServicesDetail'
import './index.sass'

const Services = () => (
  <section className="services-container">
    <MainHeader />
    <SubHeader />
    <BreadCrumb>
      <p>Services</p>
    </BreadCrumb>
    <ServicesDescription />
    <ServicesDetail />
    <Contact />
    <Explore />
    <Footer />
  </section>
)

export default Services
