import React from 'react';
import Quote from '../../components/Quote/index';
import Missions from '../../components/Mission/index';
import Introduction from '../../components/Introduction/index';
import CompanyQuality from '../../components/CompanyQualities/index';
import Achieves from '../../components/Achieves/index';
import Feedback from '../../components/Feedback/index';
import Contact from '../../components/Contact/index';
import Technologies from '../../components/Technologies/index';
import Explore from '../../components/Explore/index';
import MainHeader from '../../components/MainHeader/index';
import Footer from '../../components/Footer/index';
import SliderCarousel from '../../components/SliderCarousel/index';
import AutoCarousel from '../../components/AutoCarousel/index';

import partnersLogo from '../../utils/PartnersLogo';
import feedback from '../../utils/Feedback';

function Home() {
  return (
    <section>
      <MainHeader />
      <Quote />
      <Missions />
      <Introduction />
      <CompanyQuality />
      <Achieves />
      <AutoCarousel content={feedback} />
      <SliderCarousel images={partnersLogo} />
      <Technologies />
      <Contact />
      <Explore />
      <Footer />
    </section>
  );
}

export default Home;
