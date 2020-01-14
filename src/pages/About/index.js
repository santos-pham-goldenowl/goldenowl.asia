import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import Partners from '../../components/Partners/index';
import AboutUs from '../../components/AboutUs/index';
import IntroductionDetail from '../../components/IntroductionDetail/index';
import Work from '../../components/WorkTogether/index';
import about_bg from '../../assets/images/about_bg.png';
import BreadCrumb from '../../components/BreadCrumb/index';
import './index.sass';

class About extends Component {
  render() {
    return(
      <section className="about-container">
        <div className="about-container__top-wrapper">
          <MainHeader />
          <SubHeader />
          <BreadCrumb>
            <p>About</p>
          </BreadCrumb>
          <AboutUs />
        </div>
        <img class="about-container__wavy-bg" src={about_bg} alt="wavy-bg" loading="lazy" />
        <IntroductionDetail />
        <Work />
        <Partners />
        <Footer />
      </section>
    );
  }
}
export default About;
