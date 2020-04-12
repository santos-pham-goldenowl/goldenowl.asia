import React from "react";
import Helmet from "react-helmet";

import MainHeader from "components/MainHeader";
import SubHeader from "components/SubHeader";
import Partners from "components/Partners";
import Contact from "components/Contact";
import Explore from "components/Explore";
import Footer from "components/Footer";

import Quote from "./components/Quote";
import Missions from "./components/Mission";
import Introduction from "./components/Introduction";
import CompanyQuality from "./components/CompanyQualities";
import Archieves from "./components/Archieves";
import Feedback from "./components/Feedback";
import Technologies from "./components/Technologies";
import FixedTopHeader from "components/FixedTopHeader";

import stickyTrigger from "utils/stickyTrigger";
import useScrollDirection from "utils/hooks/useScrollDirection";

import "./index.sass";

const Home = () => {
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  const hrStyle = {
    height: 0.8,
    border: "none",
    backgroundColor: "#DCDCDC",
    margin: "0 auto",
  };

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
        <hr style={hrStyle} />
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
