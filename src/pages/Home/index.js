import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import Explore from '../../components/Explore';
import Contact from '../../components/Contact';
import Partners from '../../components/Partners';
import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import FixedTopHeader from '../../components/FixedTopHeader';

import Quote from './components/Quote';
import Missions from './components/Mission';
import Feedback from './components/Feedback';
import Archieves from './components/Archieves';
import Introduction from './components/Introduction';
import Technologies from './components/Technologies';
import CompanyQuality from './components/CompanyQualities';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import companyLogo from '../../assets/images/GoldenOwlLogo.png';
import './index.sass';

const Home = () => {
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="home">
      <Helmet>
        <title>Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native</title>
        <link href="https://goldenowl.asia/home-amp.html" rel="amphtml" />
        <link rel="canonical" href="https://goldenowl.asia/" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug" name="google-site-verification" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." name="description" /><meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." property="og:description" />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
      </Helmet>
      <div className="container-fluid no-padding">
        <FixedTopHeader />
        <MainHeader />
        <SubHeader />
        <Quote />
        <Missions />
        <Introduction />
        <CompanyQuality />
        <Archieves />
        <Feedback />
        <hr style={{
          height: 0.8,
          margin: '0 auto',
          backgroundColor: '#DCDCDC',
          border: 'none',
        }}
        />
        <Partners />
        <Technologies />
        <Contact />
        <Explore />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
