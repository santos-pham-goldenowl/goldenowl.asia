import React, { Component } from 'react';

import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';
import AboutUs from '../../components/AboutUs';
import BreadCrumb from '../../components/BreadCrumb';
import Success from '../../components/Success';
import Develop from '../../components/Develop';
import IntroductionDetail from '../../components/IntroductionDetail';
import './index.sass';

class About extends Component {
  render() {
    return (
      <section className="about-container">
        <div className="container-fluid no-padding">
          <MainHeader />
          <SubHeader />
          <BreadCrumb>
            <p>About</p>
          </BreadCrumb>
          <AboutUs />
          <IntroductionDetail />
          <Success />
          <Develop />
          <Partners />
          <Footer />
        </div>
      </section>
    );
  }
}
export default About;
