import React, { createRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import BreadCrumb from '../../components/BreadCrumb';
import CheckPoint from '../../components/CheckPoint';
import FixedTopHeader from '../../components/FixedTopHeader';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';

import stickyTrigger from '../../utils/stickyTrigger';
import useMobileWidth from '../../utils/hooks/useMobileWidth';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import { HEADER_DESCRIPTION } from '../../constant';

import './index.sass';
import companyLogo from '../../assets/images/GoldenOwlLogo.png';

const Contact = () => {
  const isMobile = useMobileWidth();
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  // useEffect(() => {
  //   const script = document.createElement("script")

  //   script.type = "text/javascript";
  //   script.src="https://forms.teamwave.com/static/js/webform-1.0.js";

  //   const iframeForm = document.getElementById("contact-form-iframe");

  //   iframeForm.appendChild(script);
  // }, [])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://forms.teamwave.com/static/js/webform-1.0.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="contact-us">
      <Helmet>
        <title>Contact Us - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug"
          name="google-site-verification"
        />
        <meta
          content={HEADER_DESCRIPTION}
          name="description"
        />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta
          content={HEADER_DESCRIPTION}
          property="og:description"
        />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <p>Contact us</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/contact-us">Contact us</Link>
        </BreadCrumb>
        <section className="contact-form">
          <div className="contact-form__wrapper">
            <div className="row">
              <div className="col-md-5" data-aos="fade-right">
                {isMobile ? (
                  <h1>
                    Chat with our
                    {' '}
                    <br />
                    {' '}
                    sales team
                  </h1>
                ) : (
                  <h1>Chat with our sales team</h1>
                )}
                <p className="contact-form__introduction">
                  Whether you’re a start-up, we’d love to chat about our
                  products and make a personalised plan that fits your business.
                </p>
                <div className="d-flex">
                  <CheckPoint />
                  <p className="contact-form__reason">
                    Learn more about Golden Owl
                  </p>
                </div>
                <br />
                <div className="d-flex">
                  <CheckPoint />
                  <p className="contact-form__reason">
                    Find the right solution for your needs
                  </p>
                </div>
                <br />
                <div className="d-flex">
                  <CheckPoint />
                  <p className="contact-form__reason">
                    Schedule a demo
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 p-0 ml-auto overflow-hidden" data-aos="fade-left">
                {/* <div dangerouslySetInnerHTML={{__html: '<div style="text-align: center;" class="tw-webforms" data-src="https://forms.teamwave.com/tw16294-549890c2df614a369947f1e1e742807e-33002form"></div>'}} /> */}
                <iframe
                  id="contact-form-iframe"
                  src="https://forms.teamwave.com/tw16294-549890c2df614a369947f1e1e742807e-33002form"
                  scrolling="no"
                  title="GO-contact-form"
                  seamless="seamless"
                />
                {/* <script type="text/javascript" src="https://forms.teamwave.com/static/js/webform-1.0.js"></script> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
