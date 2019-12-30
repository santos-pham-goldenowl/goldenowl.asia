import React, { Component } from 'react';
import Quote from './Quote';
import Missions from './Missions';
import Introduction from './Introduction';
import CompanyQuality from './CompanyQualities';
import Achieves from './Achieves';
import Feedback from './Feedback';
import Contact from './Contact';
import Partners from './Partners';
import Technologies from './Technologies';
class Home extends Component {
  render() {
    return (
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
}

export default Home;
