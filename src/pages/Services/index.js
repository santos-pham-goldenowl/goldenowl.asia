import React from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import Explore from '../../components/Explore/index';
import Contact from '../../components/Contact/index';
import Home from '../../components/BreadCrumb/index';
import ServicesDescription from '../../components/ServicesDescription';
import ServicesDetail from '../../components/ServicesDetail';
import wavy_bg from "../../assets/images/wavy_bg_2.png";
import './index.sass';

const Services = () => (
  <section className="services-container">
    <MainHeader />
    <SubHeader />
    <Home>
      <p>Services</p>
    </Home>
    <ServicesDescription />
    <img className="wavy-bg" src={wavy_bg} alt="wavy_bg" loading="lazy" />
    <ServicesDetail />
    <Contact />
    <Explore />
    <Footer />
  </section>
);

export default Services;
