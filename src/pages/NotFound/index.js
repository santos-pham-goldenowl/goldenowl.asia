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
import img404 from "../../assets/images/404bg.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  const isMobile = useMobileWidth();

  window.onscroll = () => stickyTrigger(scrollDirection);

  if (!isMobile) {
    window.onmousemove = function (e) {
      const cursorFollower = document.getElementById("cursor-follower");
      const imageZone = document.getElementById("not-found-zone");
      const notFoundWrapper = document.getElementById(
        "not-found-image-wrapper"
      );

    if (cursorFollower && imageZone && notFoundWrapper ) {const limitOffset = (cursorFollower.offsetWidth * (13 / 24)) / 2;
      const imageZoneBound = {
        top: imageZone.offsetTop + notFoundWrapper.offsetTop,
        left: imageZone.offsetLeft + notFoundWrapper.offsetLeft,
      };

      const minX = imageZoneBound.left - limitOffset;
      const maxX =
        imageZoneBound.left +
        imageZone.offsetWidth +
        limitOffset -
        cursorFollower.offsetWidth;
      const minY = imageZoneBound.top - limitOffset;
      const maxY =
        imageZoneBound.top +
        imageZone.offsetHeight +
        limitOffset -
        cursorFollower.offsetHeight;

      const xPos = e.pageX - cursorFollower.offsetWidth / 2;
      const yPos = e.pageY - cursorFollower.offsetHeight / 2;

      let left = 0;
      let top = 0;

      if (e.pageY - cursorFollower.offsetHeight * (25 / 48) < minY) top = minY;
      else if (e.pageY - cursorFollower.offsetHeight * 0.5 > maxY) top = maxY;
      else top = yPos;
      if (e.pageX - cursorFollower.offsetWidth * 0.5 < minX) left = minX;
      else if (e.pageX - cursorFollower.offsetWidth * (11 / 24) > maxX)
        left = maxX;
      else left = xPos;

      cursorFollower.style.top = `${top}px`;
      cursorFollower.style.left = `${left}px`;}
    };
  }

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
          <p>
            It seems the page you’re looking for is no longer here. Please,
            check URL or return to the home page!
          </p>
        </div>
      </div>
      <Link to="/" className="d-block back-to-home">
        <span>Go Home</span>
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
            <span>Go Home</span>
          </Link>
        </div>
        <div id="not-found-image-wrapper" className="col-12 col-md-7">
          <img id="not-found-zone" src={img404} />
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
        {isMobile ? null : <div id="cursor-follower" />}
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
