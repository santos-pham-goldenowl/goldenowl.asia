import React from 'react';
import Quote from '../../components/Quote/index';
import Missions from '../../components/Mission/index';
import Introduction from '../../components/Introduction/index';
import CompanyQuality from '../../components/CompanyQualities/index';
import Achieves from '../../components/Achieves/index';
import Feedback from '../../components/Feedback/index';
import Partners from '../../components/Partners/index';
import Contact from '../../components/Contact/index';
import Technologies from '../../components/Technologies/index';
import Explore from '../../components/Explore/index';
import MainHeader from '../../components/MainHeader/index';
import SubHeader from '../../components/SubHeader/index';
import Footer from '../../components/Footer/index';
import './index.sass';
import bg from '../../assets/images/bg_2.png';

function Home() {
  return (
    <section className="home">
      <MainHeader />
      <SubHeader />
      <Quote />
      <Missions />
      <img className="home__wavy-bg" src={bg} alt="wavy-background" loading="lazy" />
      <Introduction />
      <CompanyQuality />
      <Achieves />
      <Feedback />
      <Partners />
      <Technologies />
      <Contact />
      <Explore />
      <Footer />
    </section>
  );
}

export default Home;
