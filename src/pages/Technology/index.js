import React from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import TechnologyDescription from '../../components/TechnologyDescription/index';
import Home from '../../components/BreadCrumb/index';
import CompanyQualities from '../../components/CompanyQualities/index';
import TechnologyDetail from '../../components/TechnologyDetail/index';
import Guarantee from '../../components/Guarantee/index';
import './index.sass';
import wavyBg from '../../assets/images/wavy_bg_tech.png';

const TechnologyContainer = () => {
  return (
    <section className="technology-container">
      <MainHeader />
      <SubHeader />
      <Home>
        <p>Technology</p>
      </Home>
      <TechnologyDescription />
      <img className="wavy-bg" src={wavyBg} alt="wavy-bg" loading="lazy" />
      <Guarantee />
      <TechnologyDetail />
      <Footer />
    </section>
  );
}

export default TechnologyContainer;
