import React, { createRef } from "react";
import Helmet from "react-helmet";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import FixedTopHeader from "../../components/FixedTopHeader";

import useMobileWidth from "../../utils/hooks/useMobileWidth";
import stickyTrigger from "../../utils/stickyTrigger";
import useScrollDirection from "../../utils/hooks/useScrollDirection";

import "./index.sass";
import notFound from "../../assets/images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  const isMobile = useMobileWidth();

  window.onscroll = () => stickyTrigger(scrollDirection);

  const mobileRender = () => (
    <section className="not-found__content">
      <div className="row">
            <div className="col-12">
              <h1>Oops, looks like you’re lost in space!</h1>
            </div>
            <div className="col-12">
                <img src={notFound} alt="GO-not-found" />
            </div>
            <div className="col-12">
              <p>It seems the page you’re looking for is no longer here. Please, check URL or return to the home page!</p>
            </div>
          </div>
          <Link to="/" className="d-block back-to-home">
            Go Home
          </Link>
    </section>
  );

  const defaultRender = () => (
    <section className="not-found__content">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="row">
            <div className="col-12">
              <h1>Oops, looks like you’re lost in space!</h1>
            </div>
            <div className="col-12">
              <p>{`It seems the page you’re\nlooking for is no longer here.\nPlease, check URL or return to\nthe home page!`}</p>
            </div>
          </div>
          <Link to="/" className="d-block back-to-home">
            Go Home
          </Link>
        </div>
        <div className="col-12 col-md-7">
          <img src={notFound} alt="GO-not-found" />
        </div>
      </div>
    </section>
  );

  return (
    <section className="not-found">
      <Helmet>
        <title>404 Not Found - Golden Owl</title>
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <MainHeader />
        <SubHeader />
        {isMobile ? mobileRender() : defaultRender()}
        <Footer />
      </div>
    </section>
  );
};

export default NotFound;
