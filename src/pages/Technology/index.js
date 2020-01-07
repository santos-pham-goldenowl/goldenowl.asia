import React from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import TechnologyDescription from '../../components/TechnologyDescription/index';
import Home from '../../components/Home/index';
import CompanyQualities from '../../components/CompanyQualities/index';
import TechnologyDetail from '../../components/TechnologyDetail/index';
import './index.sass';
import wavyBg from '../../assets/images/wavy_bg_tech.png';

const TechnologyContainer = () => {
  return (
    <section className="technology-container">
      <MainHeader />
      <SubHeader />
      <Home pageName="Technology" />
      <TechnologyDescription />
      <img className="wavy-bg" src={wavyBg} alt="wavy-bg" />
      <CompanyQualities />
      <TechnologyDetail />
      <Footer />
    </section>
  );
}

export default TechnologyContainer;
