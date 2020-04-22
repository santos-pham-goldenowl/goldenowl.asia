import React, { createRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import axios from "axios";
import { useForm } from "react-form";
import { Modal } from "react-bootstrap";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import CheckPoint from "../../components/CheckPoint";
import ArrowRight from "../../components/ArrowRight";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";
import {
  SelectField,
  InputField,
  InputTextArea,
} from "../../components/FormInputs";

import stickyTrigger from "../../utils/stickyTrigger";
import countries from "../../utils/countries";
import useMobileWidth from "../../utils/hooks/useMobileWidth";
import useScrollDirection from "../../utils/hooks/useScrollDirection";

import "./index.sass";
import goLogo from "../../assets/images/go.png";
import companyLogo from '../../assets/images/GoldenOwlLogo.png';

const Contact = () => {
  const [modal, setModal] = useState();
  const [failedModal, setFailedModal] = useState();

  const isMobile = useMobileWidth();
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  const defaultValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      company: "",
      country: "",
      subject: "",
      message: "",
    }),
    []
  );

  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    defaultValues,
    onSubmit: async (values, instance) => {
      await axios
        .post("/send-email", values)
        .then((res) => {
          if (!res.data.error) {
            instance.reset();
            setModal(true);
          } else setFailedModal(true);
        })
        .catch((error) => {
          error && setFailedModal(true);
        });
    },
    debugForm: false,
  });

  window.onscroll = () => stickyTrigger(scrollDirection);

  const validateEmail = (email) => {
    var re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNum = (phoneNum) => {
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.[0-9]*$/;
    return re.test(String(phoneNum).toLowerCase()) || !phoneNum;
  };

  const formRender = () => (
    <Form>
      <div className="contact-form__form">
        <div className="row">
          {/* First Name */}
          <div className="col-12 col-md-6">
            <label>First name*</label>
            <InputField
              className="form-control"
              placeholder="Your first name"
              field="firstName"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          {/* Last Name */}
          <div className="col-12 col-md-6">
            <label>Last name*</label>
            <InputField
              className="form-control"
              placeholder="Your last name"
              field="lastName"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          {/* Email */}
          <div className="col-12 col-md-6">
            <label>Email*</label>
            <InputField
              className="form-control"
              type="email"
              field="email"
              placeholder="Your email"
              validate={async (value) => {
                if (!value) {
                  return "Required";
                }

                if (!validateEmail(value)) {
                  return "Invalid email address";
                }

                await new Promise((resolve) => setTimeout(resolve, 1000));

                return false;
              }}
            />
          </div>
          {/* Phone Number */}
          <div className="col-12 col-md-6">
            <label>Phone number*</label>
            <InputField
              className="form-control"
              type="phone"
              placeholder="+84 212 2223 333"
              field="phoneNum"
              validate={async (value) => {
                if (!value) {
                  return "Required";
                }

                if (!validatePhoneNum(value)) {
                  return "Invalid phone number";
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));

                return false;
              }}
            />
          </div>
          {/* Company */}
          <div className="col-12 col-md-6">
            <label>Company</label>
            <InputField
              className="form-control"
              placeholder="Your company"
              field="company"
            />
          </div>
          {/* Countries */}
          <div className="col-12 col-md-6">
            <label>Country</label>
            <SelectField
              className="custom-select"
              field="country"
              options={countries}
            />
          </div>
          {/* Subject */}
          <div className="col-md-12">
            <label>Subject*</label>
            <InputField
              className="form-control"
              placeholder="Overview in the few words"
              field="subject"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          <div className="col-md-12">
            <label>Your message*</label>
            <InputTextArea
              rows={isMobile ? 7 : 5}
              className="form-control"
              placeholder="How can we help you?"
              field="message"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          <Modal
            size="sm"
            show={failedModal}
            onHide={() => setFailedModal(false)}
          >
            <Modal.Body>
              <div className="d-flex">
                <img
                  className="modal-logo align-self-center"
                  src={goLogo}
                  alt="GO logo"
                />
                <p className="d-inline-block m-auto">
                  <center>
                    Failed to send message,
                    <br /> please try again!
                  </center>
                </p>
              </div>
            </Modal.Body>
          </Modal>
          <Modal size="sm" show={modal} onHide={() => setModal(false)}>
            <Modal.Body>
              <div className="d-flex">
                <img
                  className="modal-logo align-self-center"
                  src={goLogo}
                  alt="GO logo"
                />
                <p className="d-inline-block m-auto">
                  <center>Message has been sent!</center>
                </p>
              </div>
            </Modal.Body>
          </Modal>
          {isSubmitting ? (
            <div className="col-md-12 pr-0">
              <button
                type="submit"
                className="send-wrapper w-100 d-flex btn btn-link p-0"
              >
                <div className="send-rectangle">
                  <div className="row h-100">
                    <div className="col-6 mt-auto text-left">
                      <p>Sending...</p>
                    </div>
                    <div className="col-6 mt-auto d-flex justify-content-end">
                      <ArrowRight className="contact-form__arrow" />
                    </div>
                  </div>
                </div>
                <div className="send-dashed-border" />
              </button>
            </div>
          ) : (
            <div className="col-md-12 pr-0">
              <button
                type="submit"
                disable={!canSubmit}
                className="send-wrapper w-100 d-flex btn btn-link p-0"
              >
                <div className="send-rectangle">
                  <div className="row h-100">
                    <div className="col-6 mt-auto text-left">
                      <p>Send message</p>
                    </div>
                    <div className="col-6 mt-auto d-flex justify-content-end">
                      <ArrowRight className="contact-form__arrow" />
                    </div>
                  </div>
                </div>
                <div className="send-dashed-border" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Form>
  );


  return (
    <section className="contact-us">
      <Helmet>
        <title>Contact Us - Golden Owl</title>
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
                    Schedule a demo
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 p-0 ml-auto">
                  <iframe
                    src="https://pipedrivewebforms.com/form/d4ad07bce7708484ea5575cea7d07e9a7536351"
                    scrolling="no"
                    seamless="seamless"
                  />
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
