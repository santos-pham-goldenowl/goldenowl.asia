import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';

import objectToArray from '../../utils/objectToArray';
import stickyTrigger from '../../utils/stickyTrigger';
import capitalizeWords from '../../utils/capitalizeWords';
import useMobileWidth from '../../utils/hooks/useMobileWidth';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import coverPlaceholder from '../../assets/images/service/cover-min.png';
import mCoverPlaceholder from '../../assets/images/service/mCover-min.png';

import { HEADER_DESCRIPTION } from '../../constant';

import companyLogo from '../../assets/images/GoldenOwlLogo.png';
import './index.sass';

const ServicesSubPage = ({ content }) => {
  const isMobile = useMobileWidth();

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="service">
      <Helmet>
        <title>{`${capitalizeWords(content.key)} - Golden Owl`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={HEADER_DESCRIPTION} name="description" />
        <meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content={HEADER_DESCRIPTION} property="og:description" />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <Link to="/services">Services</Link>
          <span>/</span>
          <p>{content.key}</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/services">Services</Link>
          <span>/</span>
          <p>{content.key}</p>
        </BreadCrumb>
        <section className="service__first-content">
          <h1>{content.first.title ? content.first.title : content.key}</h1>
          <p className="pb-0"><strong>{content.first.highlight}</strong></p>
          <p>{content.first.content}</p>
        </section>
        <section className="cover">
          <div id="white-background" />
          <div className="image-wrapper">
            <img
              src={isMobile ? content.mobileCover : content.cover}
              alt={`GO-${content.key}-cover`}
            />
          </div>
          <div className="invisible placeholder-wrapper">
            <img
              src={isMobile ? mCoverPlaceholder : coverPlaceholder}
              alt={`GO-${content.key}-cover`}
            />
          </div>
        </section>
        <section className="service__second-content">
          <h1>{content.second.title}</h1>
          <p>{content.second.content}</p>
        </section>
        <section className="service__slogan">
          <h2>{content.third.title}</h2>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="service__slogan-item">
                <h3>{content.third.left.title}</h3>
                <p>{content.third.left.content}</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="service__slogan-item">
                <h3>{content.third.center.title}</h3>
                <p>{content.third.center.content}</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="service__slogan-item no-border">
                <h3>{content.third.right.title}</h3>
                <p>{content.third.right.content}</p>
              </div>
            </div>
          </div>
          {/* <Link onClick={openPortfolioInNewTab}><strong>See how we developed our projects</strong></Link> */}
        </section>
        <section className="service__third-content">
          <div id="rectangle" className="service__yellow-rectangle d-flex ">
            <div className="service__yellow-rectangle__text">
              <h3>{content.fourth.title}</h3>
              <p>{content.fourth.content}</p>
            </div>
            <div className="service__logos-wrapper">
              <div className="d-flex flex-wrap">
                {content.fourth.logos.map((image) => (
                  <img
                    key={image.name}
                    src={image.url}
                    alt={image.name}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          <div id="dashed-border" className="service__dotted-square d-flex">
            {/* append data */}
            <div
              id="inside-border"
              className="service__yellow-rectangle d-flex invisible"
            >
              <div className="service__yellow-rectangle__text">
                <h3>{content.fourth.title}</h3>
                <p>{content.fourth.content}</p>
              </div>
              <div className="service__logos-wrapper">
                <div className="d-flex flex-wrap">
                  {content.fourth.logos.map((image) => (
                    <img
                      key={image.name}
                      src={image.url}
                      alt={image.name}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service__other-services-container">
          <h3 className="service__other-services-title">Other services</h3>
          <div className="row">
            {objectToArray(content.navs).map((image) => (
              <div
                key={image.title}
                className="col-12 col-md-4 service__other-service-wrapper"
              >
                <Link
                  className="service__other-service"
                  to={`/services/${image.url}`}
                >
                  <div className="col-4 col-md-3">
                    <img id={image.url} src={image.imgUrl} alt={image.title} />
                  </div>
                  <div className="col-8 col-md-9">
                    <h4 className="">{image.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default ServicesSubPage;
