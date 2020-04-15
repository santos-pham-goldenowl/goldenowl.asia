import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import axios from "axios";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import CheckPoint from "../../components/CheckPoint";
import ArrowRight from "../../components/ArrowRight";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";

import stickyTrigger from "../../utils/stickyTrigger";
import countries from "../../utils/countries";
import useMobileWidth from "../../utils/hooks/useMobileWidth";
import useScrollDirection from "../../utils/hooks/useScrollDirection";

import "./index.sass";
import objectToArray from "../../utils/objectToArray";

const ServicesSubPage = () => {
  const isMobile = useMobileWidth();
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();
  const [info, setInfo] = useState();

  const onInputChange = (label, data) => setInfo({ ...info, [label]: data });

  const sendEmail = () =>
    axios
      .post("https://golden-owl-web.herokuapp.com/send-email", info)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="contact-us">
      <Helmet>
        <title>Contact Us - Golden Owl</title>
        <link href="https://www.goldenowl.asia/home/amp" rel="amphtml" />
        <link href="https://www.goldenowl.asia/home/home" rel="canonical" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug" name="google-site-verification" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." name="description" /><meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." property="og:description" />
        <meta content="http://www.goldenowl.asia/assets/background-home.jpg" property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
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
              <div className="col-md-5">
                {isMobile ? (
                  <h1>
                    Chat with our <br /> sales team
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
                    Learn more about Golden Owl
                  </p>
                </div>
              </div>
              <div className="col-md-6 ml-auto">
                <div className="contact-form__form">
                  <div className="row">
                    <div className="col-md-6">
                      <label>First name</label>
                      <input
                        className="form-control"
                        placeholder="Your first name"
                        onChange={(e) =>
                          onInputChange("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last name</label>
                      <input
                        className="form-control"
                        placeholder="Your last name"
                        onChange={(e) =>
                          onInputChange("lastName", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email*</label>
                      <input
                        required
                        className="form-control"
                        placeholder="Your email"
                        onChange={(e) => onInputChange("email", e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Phone number</label>
                      <input
                        className="form-control"
                        placeholder="+84 212 2223 333"
                        onChange={(e) =>
                          onInputChange("phoneNum", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Company</label>
                      <input
                        className="form-control"
                        placeholder="Your company"
                        onChange={(e) =>
                          onInputChange("company", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          onInputChange("country", e.target.value)
                        }
                      >
                        {countries.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label>Subject*</label>
                      <input
                        required
                        className="form-control"
                        placeholder="Overview in the few words"
                        onChange={(e) =>
                          onInputChange("subject", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Your message*</label>
                      <textarea
                        required
                        rows={isMobile ? 7 : 5}
                        className="form-control"
                        placeholder="How can we help you?"
                        onChange={(e) =>
                          onInputChange("message", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-12 pr-0">
                      <div
                        onClick={sendEmail}
                        className="contact-form__send-wrapper d-flex"
                      >
                        <div className="send-rectangle">
                          <div className="row h-100">
                            <div className="col-6 mt-auto">
                              <p>Send message</p>
                            </div>
                            <div className="col-6 mt-auto d-flex justify-content-end">
                              <ArrowRight className="contact-form__arrow" />
                            </div>
                          </div>
                        </div>
                        <div className="send-dashed-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default ServicesSubPage;
