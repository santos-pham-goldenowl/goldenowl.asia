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

import './index.sass';

const Home = () => {
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="home">
      <Helmet>
        <title>Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native</title>
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
