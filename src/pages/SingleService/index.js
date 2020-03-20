import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import objectToArray from "../../utils/objectToArray";

import "./index.sass";

const SingleService = ({ content }) => {
  const { key } = content;
  return (
    <section className="service">
      <div className="container-fluid no-padding">
        <MainHeader />
        <SubHeader />
        <BreadCrumb>
          <Link to="/services">Services</Link>
          <span>/</span>
          <p>{key}</p>
        </BreadCrumb>
        <section className="service__first-content">
          <h1>{key}</h1>
          <p>{content.first.content}</p>
          <div className="image-wrapper">
            <img src={content.cover} alt="cover" />
          </div>
        </section>
        <section className="service__second-content">
          <h2>{content.second.title}</h2>
          <p>{content.second.content}</p>
        </section>
        <section className="service__slogan">
          <h2>Simple and powerful</h2>
          <div className="d-flex">
            <div className="col-md-4">
              <div className="service__slogan-item">
                <h3>{content.third.left.title}</h3>
                <p>{content.third.left.content}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service__slogan-item">
                <h3>{content.third.center.title}</h3>
                <p>{content.third.center.content}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service__slogan-item no-border">
                <h3>{content.third.right.title}</h3>
                <p>{content.third.right.content}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="service__third-content">
          <div className="service__yellow-rectangle">
            <div className="row">
              <div className="col-md-8">
                <h3>{content.fourth.title}</h3>
                <p>{content.fourth.content}</p>
              </div>
              <div className="col-md-4 service__logos-wrapper d-flex flex-wrap align-items-start">
                {objectToArray(content.fourth.logos).map(image => (
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
          {/* <div className="service__dotted-square" /> */}
        </section>
        <section className="service__other-services-container">
          <h3 className="service__other-services-title">Other services</h3>
          <div className="d-flex flex-wrap">
            {objectToArray(content.navs).map(image => (
              <div
                key={image.title}
                className="col-sm-12 col-md-6 service__other-service-wrapper"
              >
                <Link
                  className="service__other-service"
                  to={`/services/${image.url}`}
                >
                  <div className="col-sm-3">
                    <img src={image.imgUrl} alt={image.title} />
                  </div>
                  <div className="col-sm-9">
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

export default SingleService;
