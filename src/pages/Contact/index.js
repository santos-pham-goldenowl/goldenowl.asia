import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import axios from "axios";
import { useForm, useField, splitFormProps } from "react-form";
import { Modal } from "react-bootstrap";

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

const SelectField = (props) => {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched },
  } = useField(field, fieldOptions);

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {isTouched && error ? <em>{error}</em> : null}
      <select {...rest} value={value} onChange={handleSelectChange}>
        <option disabled value="" />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
    </>
  );
};
  
const InputField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions);

  return (
    <>
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : message ? (
        <em>{message}</em>
      ) : null}
      <input {...getInputProps({ ref, ...rest })} />
    </>
  );
});

const InputTextArea = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions);

  return (
    <>
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : message ? (
        <em>{message}</em>
      ) : null}
      <textarea {...getInputProps({ ref, ...rest })} />
    </>
  );
});

const ServicesSubPage = () => {
  const [modal, setModal] = useState();
  const [failedModal, setFailedModal] = useState();

  const isMobile = useMobileWidth();
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  function validateEmail(email) {
    var re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhoneNum(phoneNum) {
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.[0-9]*$/;
    return re.test(String(phoneNum).toLowerCase()) || !phoneNum;
  }

  const {
    Form,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    onSubmit: async (values, instance, reset) => {
      await axios
        .post("/send-email", values)
        .then((response) => {
          instance.reset();
          setModal(true);
        })
        .catch((error) => {
          error && setFailedModal(true)
        });
    },
    debugForm: false,
  });

  const formRender = () => (
    <Form>
      <div className="contact-form__form">
        <div className="row">
          {/* First Name */}
          <div className="col-md-6">
            <label>First name*</label>
            <InputField
              className="form-control"
              placeholder="Your first name"
              field="firstName"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          {/* Last Name */}
          <div className="col-md-6">
            <label>Last name*</label>
            <InputField
              className="form-control"
              placeholder="Your last name"
              field="lastName"
              validate={(value) => (!value ? "Required" : false)}
            />
          </div>
          {/* Email */}
          <div className="col-md-6">
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
                  return "Please enter a valid email addresss";
                }

                await new Promise((resolve) => setTimeout(resolve, 1000));

                return false;
              }}
            />
          </div>
          {/* Phone Number */}
          <div className="col-md-6">
            <label>Phone number</label>
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
                  return "Please enter a valid phone number";
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));

                return false;
              }}
            />
          </div>
          {/* Company */}
          <div className="col-md-6">
            <label>Company</label>
            <InputField
              className="form-control"
              placeholder="Your company"
              field="company"
            />
          </div>
          {/* Countries */}
          <div className="col-md-6">
            <label>Country</label>
            <SelectField
              className="form-control"
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
          <Modal size="sm" show={failedModal} onHide={() => setFailedModal(false)}>
            <Modal.Body><p className="failed-message"><center>Failed to send message,<br/> please try again!</center></p></Modal.Body>
          </Modal>
          <Modal size="sm" show={modal} onHide={() => setModal(false)}>
            <Modal.Body><p className="success-message"><center>Message has been sent!</center></p></Modal.Body>
          </Modal>
          {isSubmitting ? (
            <div className="col-md-12 pr-0">
              <button
                type="submit"
                className="contact-form__send-wrapper w-100 d-flex btn btn-link p-0"
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
                className="contact-form__send-wrapper w-100 d-flex btn btn-link p-0"
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
              <div className="col-12 col-md-6 ml-auto">{formRender()}</div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default ServicesSubPage;
