import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import CheckPoint from "../../components/CheckPoint";
import ArrowRight from "../../components/ArrowRight";

import "./index.sass";

const SingleService = () => {
  return (
    <section className="contact-us">
      <div className="container-fluid no-padding">
        <MainHeader />
        <SubHeader />
        <BreadCrumb>
          <Link to="/contact-us">Contact us</Link>
        </BreadCrumb>
        <section className="contact-form">
          <div className="contact-form__wrapper">
            <div className="row">
              <div className="col-md-5">
                <h1>Chat with our sales team</h1>
                <p className="contact-form__introduction">
                  Whether you’re a start-up, we’d love to chat about our
                  products and make a personalised plan that fits your business.
                </p>
                <div className="d-flex">
                  <CheckPoint />
                  <p>Learn more about Golden Owl</p>
                </div>
                <br />
                <div className="d-flex">
                  <CheckPoint />
                  <p>Find the right solution for your needs</p>
                </div>
                <br />
                <div className="d-flex">
                  <CheckPoint />
                  <p>Learn more about Golden Owl</p>
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
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last name</label>
                      <input
                        className="form-control"
                        placeholder="Your last name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email*</label>
                      <input
                        required
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Phone number</label>
                      <input
                        className="form-control"
                        placeholder="+84 212 2223 333"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Company</label>
                      <input
                        className="form-control"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select className="form-control" />
                    </div>
                    <div className="col-md-12">
                      <label>Subject*</label>
                      <input
                        required
                        className="form-control"
                        placeholder="Overview in the few words"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Your message*</label>
                      <textarea
                        required
                        rows={10}
                        className="form-control"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="col-md-12 pr-0">
                      <div className="contact-form__send-wrapper d-flex">
                        <div className="send-rectangle">
                          <div className="row h-100">
                            <div className="col-md-6 mt-auto">
                              <p>Send message</p>
                            </div>
                            <div className="col-md-6 mt-auto d-flex justify-content-end">
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

export default SingleService;
