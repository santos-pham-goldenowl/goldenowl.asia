import React, { createRef, useMemo, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Helmet from "react-helmet";
import { useForm } from "react-form";
import parse from "html-react-parser";
import FormData from "form-data";
import {
  LOADING_STATUS,
  LOADED_STATUS,
  NO_RESULT_STATUS,
  OPEN_JOB_STATUS,
  SENT_FORM_STATUS,
  NOT_SENT_FORM_STATUS,
  SENDING_FORM_STATUS,
} from "../../constant";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";
import { InputField } from "../../components/FormInputs";
import LoadingScreen from "../../components/LoadingScreen";
import SentSuccess from "./SentSuccess";

import stickyTrigger from "../../utils/stickyTrigger";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import { getCareer, submitApplication } from "../../api/careers";

import clock from "../../assets/images/clock.svg";
import "./index.sass";

const CareerDetails = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();
  const jobId =
    window && window.location
      ? window.location.pathname.split("/").slice(-1)[0]
      : "";
  const [cv, setCv] = useState(null);
  const [job, setJob] = useState({});
  const [loadStatus, setLoadStatus] = useState(LOADING_STATUS);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    getCareer(jobId)
      .then((res) => {
        const { data } = res.data;

        if (data.data.attributes.status !== OPEN_JOB_STATUS) {
          setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 500);
        } else {
          setJob({ ...data.data.attributes });
          setTimeout(() => setLoadStatus(LOADED_STATUS), 500);
        }
      })
      .catch(() => setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 500));
  }, [jobId]);

  const defaultValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      url: "",
      cv: null,
      reason: "",
    }),
    []
  );

  const setSubmitCv = (event) => setCv();

  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    defaultValues,
    onSubmit: async (values, instance) => {
      setFormStatus(SENDING_FORM_STATUS)

      const cvForm = new FormData();

      cvForm.append("firstName", values.firstName);
      cvForm.append("lastName", values.lastName);
      cvForm.append("email", values.email);
      cvForm.append("url", values.url);
      cvForm.append("cvFile", document.getElementById("upload-cv").files[0]);
      cvForm.append("reason", values.reason);
      cvForm.append("job", job.title);

      submitApplication(cvForm)
        .then((res) => {
          const { data } = res;
          instance.reset();
          setTimeout(() => setFormStatus(SENT_FORM_STATUS), 500);
        })
        .catch((error) => {
          setTimeout(() => setFormStatus(NOT_SENT_FORM_STATUS), 500);
          console.log(error);
        });
    },
    debugForm: false,
  });

  window.onscroll = () => stickyTrigger(scrollDirection);

  const onFileUploadChange = (event) => {
    if (window && window.document) {
      const upload = window.document.getElementById("upload-cv");
      const uploadFileName = upload.value.split("\\");
      const uploadPlaceholder = document.getElementById("upload-placeholder");

      uploadPlaceholder.innerHTML = upload.value
        ? uploadFileName[uploadFileName.length - 1]
        : "No file chosen";

      if (upload.value)
        document.getElementById("upload-button").style.display = "none";
      else document.getElementById("upload-button").style.display = "block";

      setSubmitCv(event);
    }
  };

  const statusRender = (status) =>
    status === OPEN_JOB_STATUS ? (
      <div className="job-status open-job d-inline-block">{status}</div>
    ) : (
      <div className="job-status filled-job d-inline-block">{status}</div>
    );

  const validateUrl = (url) => {
    const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return re.test(String(url).toLowerCase());
  };

  const validateEmail = (email) => {
    const re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateFileExtension = () => {
    const fileInput = document.getElementById("upload-cv");
    const filePath = fileInput.value;
    const allowedExtensions = /(\.pdf)$/i;
    return allowedExtensions.test(String(filePath).toLowerCase());
  };

  const validateFileSize = () => {
    const fileInput = document.getElementById("upload-cv");
    const fileSize = Math.round(fileInput.files.item(0).size / 1024);

    return fileSize < 30720;
  };

  const formRender = () => {
    switch (formStatus) {
      case SENT_FORM_STATUS:
        return (
          <div className="row">
            <div className="col-12 col-md-3" />
            <div className="col-12 col-md-6">
              <center>
                <SentSuccess />
                <br/>
                <h5>Your job application has been succesfully submitted!</h5>
              </center>
            </div>
            <div className="col-12 col-md-3" />
          </div>
        )
      case SENDING_FORM_STATUS:
        return (
          <div className="row">
            <div className="col-12 col-md-3" />
            <div className="col-12 col-md-6">
              <center>
                <LoadingScreen />
                <br/>
                <h5>Your job application is being submitted...</h5>
              </center>
            </div>
            <div className="col-12 col-md-3" />
          </div>
        )
      default:
        return (
          <Form id="application-form">
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
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );

                        if (!value) {
                          return "Required";
                        }

                        if (!validateEmail(value)) {
                          return "Invalid email address";
                        }

                        return false;
                      }}
                    />
                  </div>
                  {/* CV */}
                  <div id="cv-field" className="col-12 col-md-6">
                    <label>CV Upload*</label>
                    <InputField
                      className="d-block"
                      type="file"
                      id="upload-cv"
                      placeholder="No file chosen"
                      validate={async (value) => {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );

                        if (!value) {
                          return "Required";
                        }

                        if (!validateFileSize()) {
                          return "30MB maximum allowed";
                        }

                        if (!validateFileExtension()) {
                          return "PDF allowed only";
                        }

                        return false;
                      }}
                      field="cv"
                      onChange={(e) => onFileUploadChange(e)}
                    />
                    <label id="file-upload-ui" for="upload-cv">
                      <span id="upload-button">Choose file</span>
                      <span id="upload-placeholder">No file chosen</span>
                    </label>
                  </div>
                  {/* Portfolio URL */}
                  <div className="col-md-12">
                    <label>Portfolio URL</label>
                    <InputField
                      className="form-control"
                      placeholder="Your portfolio link"
                      field="url"
                      validate={async (value) => {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );

                        if (!value) {
                          return "Required";
                        }

                        if (!validateUrl(value)) {
                          return "Invalid URL";
                        }

                        return false;
                      }}
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
                    <div className="col-md-12">
                      <button type="submit" className="submit-button">
                        <p>Submitting...</p>
                      </button>
                    </div>
                  ) : (
                    <div className="col-md-12">
                      <button
                        type="submit"
                        disable={!canSubmit}
                        className="submit-button"
                      >
                        <p>Submit application</p>
                      </button>
                    </div>
                  )}
                  {formStatus === NOT_SENT_FORM_STATUS && <em>Can not submit application, please try again later!</em>}
                </div>
              </div>
              <div className="col-12 col-md-3" />
            </div>
          </Form>
        );
    }
  };

  switch (loadStatus) {
    case NO_RESULT_STATUS:
      return <Redirect to="/not-found" />;
    case LOADED_STATUS:
      return (
        <section className="career-details">
          <Helmet>
            <title>Career Details - Golden Owl</title>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
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
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
            />
          </Helmet>
          <div ref={pageContent} className="container-fluid no-padding">
            <FixedTopHeader />
            <FixedTopBreadCrumb pageContent={pageContent}>
              <Link to="/careers">Careers</Link>
              <span>/</span>
              <p>{job.title}</p>
            </FixedTopBreadCrumb>
            <MainHeader />
            <SubHeader />
            <BreadCrumb pageContent={pageContent}>
              <Link to="/careers">Careers</Link>
              <span>/</span>
              <p>{job.title}</p>
            </BreadCrumb>
            <section className="career-details__body">
              <div className="row">
                <div className="col-12 col-md-3" />
                <div className="col-12 col-md-6">
                  {statusRender(job.status)}
                  <span className="d-inline-block">
                    <img className="clock" src={clock} alt="GO-clock" />
                  </span>
                  <p className="d-inline careers__time">{job.job_type}</p>
                  <h2 className="career-details__body-title">{job.title}</h2>
                </div>
                <div className="col-12 col-md-3" />
                <div className="col-12 col-md-3" />
                <div className="col-12 col-md-6 career-details__body-content">
                  {job.content ? parse(job.content) : ""}
                </div>
                <div className="col-12 col-md-3" />
              </div>
            </section>
            <section className="career-details__form">
              {formRender()}
            </section>
            <Footer />
          </div>
        </section>
      );
    default:
      return <LoadingScreen />;
  }
};

export default CareerDetails;
