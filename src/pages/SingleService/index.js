import React from 'react'
import { Link } from 'react-router-dom'

import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import objectToArray from '../../utils/objectToArray'

import './index.sass'

const SingleService = ({ content }) => (
  <section className="service">
    <div className="container-fluid no-padding">
      <MainHeader />
      <SubHeader />
      <BreadCrumb>
        <Link to="/services">Services</Link>
        <span>/</span>
        <p>{content.key}</p>
      </BreadCrumb>
      <section className="service__first-content">
        <h1>{content.key}</h1>
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
        <div id="rectangle" className="service__yellow-rectangle d-flex">
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
      </section>
      <section className="service__other-services-container">
        <h3 className="service__other-services-title">Other services</h3>
        <div className="d-flex flex-wrap">
          {objectToArray(content.navs).map((image) => (
            <div
              key={image.title}
              className="col-12 col-md-6 service__other-service-wrapper"
            >
              <Link
                className="service__other-service"
                to={`/services/${image.url}`}
              >
                <div className="col-3">
                  <img src={image.imgUrl} alt={image.title} />
                </div>
                <div className="col-9">
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
)

export default SingleService
