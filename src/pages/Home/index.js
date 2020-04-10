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
import FixedTopBreadCrumb from "components/FixedTopBreadCrumb";
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
        <link href="https://www.goldenowl.asia/home/amp" rel="amphtml" />
        <link href="https://www.goldenowl.asia/home/home" rel="canonical" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug"
          name="google-site-verification"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          name="description"
        />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          property="og:description"
        />
        <meta
          content="http://www.goldenowl.asia/assets/background-home.jpg"
          property="og:image"
        />
        <link
          href="assets/logo_icon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          media="all"
          href="/assets/application-d41d4baa927c08c7ca019a882489d7d4ae0304f09d869bf39ace9dfa0abd3178.css"
          data-turbolinks-track="true"
        />
        <script
          src="/assets/application-25c6c1c4a25995a91c3a47daf33263b649cb65146d7bc57b11e4b6202b35e7a1.js"
          data-turbolinks-track="false"
        ></script>
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="HKr6wT4qyn3wWeHDn1LGVEYmJiBaQIWtDc8SRwq6rIaEGlFPIvSij3hQXtAeEF7ebRp66ht/hc7TYo0YUz34GA=="
        />
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
