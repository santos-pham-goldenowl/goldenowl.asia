import React, { createRef, useMemo, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Helmet from "react-helmet";
import { useForm } from "react-form";
import parse from "html-react-parser";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";
import { InputField } from "../../components/FormInputs";
import LoadingScreen from "../../components/LoadingScreen";

import stickyTrigger from "../../utils/stickyTrigger";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import { getCareer } from "../../api/careers";

import clock from "../../assets/images/clock.svg";
import "./index.sass";

const CareerDetails = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();
  const jobId =
    window && window.location
      ? window.location.pathname.split("/").slice(-1)[0]
      : "";
  const [job, setJob] = useState({});
  const [loadStatus, setLoadStatus] = useState("init");

  useEffect(() => {
    getCareer(jobId)
      .then((res) => {
        const { data } = res.data;

        console.log(data.data);

        if (data) {
          setJob({ ...data.data.attributes });
          setTimeout(() => setLoadStatus("loaded"), 500)
        }
      })
      .catch(() => setTimeout(() => setLoadStatus("no-result"), 500));
  }, [jobId]);

  console.log(job);

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

  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    defaultValues,
    onSubmit: async (values, instance) => {
      console.log(
        "sent!",
        values,
        document.getElementById("upload-cv").files[0]
      );
    },
    debugForm: false,
  });

  window.onscroll = () => stickyTrigger(scrollDirection);

  const onFileUploadChange = () => {
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
    }
  };

  const statusRender = (filled) =>
    filled ? (
      <div className="job-status filled-job d-inline-block">Job Filled</div>
    ) : (
      <div className="job-status open-job d-inline-block">Open</div>
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
    console.log("validateFileSize -> fileSize", fileSize);

    return fileSize < 30720;
  };

  const formRender = () => (
    <Form>
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
                  await new Promise((resolve) => setTimeout(resolve, 1000));

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
                className=""
                type="file"
                id="upload-cv"
                placeholder="No file chosen"
                validate={async (value) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));

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
                onChange={onFileUploadChange}
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
                  await new Promise((resolve) => setTimeout(resolve, 1000));

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
          </div>
        </div>
        <div className="col-12 col-md-3" />
      </div>
    </Form>
  );

  switch (loadStatus) {
    case "no-result":
      return <Redirect to="/not-found" />;
    case "loaded":
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
                {/* <div className="col-12 career-details__body-requirements">
              <div className="row">
                <div className="col-12 col-md-2" />
                <div className="col-12 col-md-8">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      {careerDetails.requirementLeft.map((item) =>
                        requirementRender(item)
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      {careerDetails.requirementRight.map((item) =>
                        requirementRender(item)
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2" />
              </div>
            </div> */}
              </div>
            </section>
            <section className="career-details__form">{formRender()}</section>
            <Footer />
          </div>
        </section>
      );
    default:
      return <LoadingScreen />;  
  }
};

export default CareerDetails;
