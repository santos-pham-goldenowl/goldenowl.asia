import React from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import Explore from '../../components/Explore/index';
import Contact from '../../components/Contact/index';
import Home from '../../components/Home/index';
import ServicesDescription from '../../components/ServicesDescription';
import ServicesDetail from '../../components/ServicesDetail';
import wavy_bg from "../../assets/images/wavy_bg_2.png";
import './index.sass';

const Services = () => {
  return (
    <section className="services-container">
      <MainHeader />
      <SubHeader />
      <Home pageName="Services" />
      <ServicesDescription />
      <img className="wavy-bg" src={wavy_bg} alt="wavy_bg" />
      <ServicesDetail />
      <Contact />
      <Explore />
      <Footer />
    </section>
  );
}

export default Services;
