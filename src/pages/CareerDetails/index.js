import React, { createRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { useForm } from "react-form";

import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import CheckPoint from '../../components/CheckPoint';
import {
  InputField,
} from "../../components/FormInputs";
import ArrowRight from '../../components/ArrowRight';

import careerDetails from '../../utils/careerDetails';
import stickyTrigger from '../../utils/stickyTrigger';
import useMobileWidth from '../../utils/hooks/useMobileWidth';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import clock from "../../assets/images/clock.svg";
import './index.sass';

const ServicesSubPage = ({ content }) => {
  const isMobile = useMobileWidth();

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  const defaultValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      url: ""
    }),
    []
  );

  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    defaultValues,
    onSubmit: async (values, instance) => {
      console.log('sent!')
    },
    debugForm: false,
  });

  window.onscroll = () => stickyTrigger(scrollDirection);

  const paragraphRender = item => (
    <>
        <div className="col-12 col-md-3" />
        <div className="col-12 col-md-6">
            <h4 className="paragraph-title">{item.title}</h4>
            <p className="paragraph-content">{item.content}</p>
        </div>
        <div className="col-12 col-md-3" />
    </>
  )
  
  const statusRender = filled =>
    filled ? (
      <div className="job-status filled-job d-inline-block">Job Filled</div>
    ) : (
      <div className="job-status open-job d-inline-block">Open</div>
    );

  const requirementRender = item => <div className="d-flex">
      <CheckPoint />  
      <p>{item}</p>
    </div>
  
  const validateEmail = (email) => {
    var re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return re.test(String(email).toLowerCase());
  };

  const formRender = () => <Form>
    <div className="row">
      <div className="col-12 col-md-3" />
      <div className="col-12 col-md-6">
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
          {/* CV */}
          <div className="col-12 col-md-6">
            <label>CV Upload*</label>
            <InputField
              className="form-control"
              type="file"
              placeholder="No file chosen"
              validate={(value) => (!value ? "Required" : false)}
              field="cv"
            />
          </div>
          {/* Portfolio URL */}
          <div className="col-md-12">
            <label>Portfolio URL</label>
            <InputField
              className="form-control"
              placeholder="Your portfolio link"
              field="url"
            />
          </div>
          {/* Reason */}
          <div className="col-md-12">
            <label>Why you are right for this role*</label>
            <InputField
              className="form-control"
              placeholder="Overview in the few words"
              field="reason"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          {isSubmitting ? (
            <div className="col-md-12 pr-0">
              <button
                type="submit"
                className="send-wrapper w-100 d-flex btn btn-link p-0"
              >
                <div className="send-rectangle">
                  <div className="row h-100">
                    <div className="col-6 mt-auto text-left">
                      <p>Submitting...</p>
                    </div>
                    <div className="col-6 mt-auto d-flex justify-content-end">
                      <ArrowRight className="careers-details__arrow" />
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
                      <p>Submit application</p>
                    </div>
                    <div className="col-6 mt-auto d-flex justify-content-end">
                      <ArrowRight className="careers-details__arrow" />
                    </div>
                  </div>
                </div>
                <div className="send-dashed-border" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-md-3" />
    </div>
  </Form> 

  return (
    <section className="career-details">
      <Helmet>
        <title>Career Details - Golden Owl</title>
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
          <Link to="/careers">Careers</Link>
          <span>/</span>
          <p>{content.key}</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/careers">Careers</Link>
          <span>/</span>
          <p>{content.key}</p>
        </BreadCrumb>
        <section className="career-details__body">
            <div className="row">
                <>
                  <div className="col-12 col-md-3" />
                  <div className="col-12 col-md-6">
                    {statusRender(content.filled)}
                    <span className="d-inline-block">
                      <img className="clock" src={clock} alt="GO-clock" />
                    </span>
                    <p className="d-inline careers__time">{content.time}</p>
                    <h2 className="career-details__body-title">{content.key}</h2>
                  </div>
                  <div className="col-12 col-md-3" />
                </>
                {paragraphRender(careerDetails.first)}
                {paragraphRender(careerDetails.second)}
                <div className="col-12">
                  <center>
                    <img className="cover-image" src={careerDetails.img} alt="GO-career" />
                  </center>
                </div>
                {paragraphRender(careerDetails.third)}
                {paragraphRender(careerDetails.fourth)}
                <div className="col-12 career-details__body-requirements">
                  <div className="row">
                    <div className="col-12 col-md-2" />
                    <div className="col-12 col-md-8">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          {careerDetails.requirementLeft.map(item => requirementRender(item))}
                        </div>
                        <div className="col-12 col-md-6">
                          {careerDetails.requirementRight.map(item => requirementRender(item))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2" />
                  </div>
                </div>
            </div>
        </section>
        <section className="career-details__form">
          {formRender()}
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default ServicesSubPage;
