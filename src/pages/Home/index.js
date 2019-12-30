import React from 'react';
import Quote from '../../components/Quote/index';
import Missions from '../../components/Mission/index';
import Introduction from '../../components/Introduction/index';
import CompanyQuality from '../../components/CompanyQualities/index.js';
import Achieves from '../../components/Achieves/index.js';
import Feedback from '../../components/Feedback/index';
import Contact from '../../components/Contact/index';
import Partners from '../../components/Partners/index';
import Technologies from '../../components/Technologies/index';

function Home() {
  return(
    <section>
      <Quote />
      <Missions />
      <Introduction />
      <CompanyQuality />
      <Achieves />
      <Feedback />
      <Partners />
      <Technologies />
      <Contact />
    </section>
  );
}

export default Home;
