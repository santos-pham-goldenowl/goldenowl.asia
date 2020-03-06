import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainHeader from '../MainHeader';
import SubHeader from '../SubHeader';
import BreadCrumb from '../BreadCrumb';
import Footer from '../Footer';
import line from '../../assets/images/line.svg';
import yelllowCopy from '../../assets/images/rectangle-copy.svg';
import './index.sass';

const Service = props => (
  <section className="service">
    <MainHeader />
    <SubHeader />
    <BreadCrumb>
      <Link to="/services">Services</Link>
      <span>/</span>
      <p>{props.pageName}</p>
    </BreadCrumb>
    <div className="service__top-content">
      <div className="service__single-padding">
        <h1 className="service__title heading-xl">
          {props.serviceData.pageTitle}
        </h1>
        <p className="service__short-intro text-xl">
          {props.serviceData.intro}
        </p>
      </div>
      <div className="service__gray-bg">
        <img className="service__web-image" src={props.serviceData.coverImage} alt="web development" />
        <div className="service__single-padding service__gray-bg-text">
          <h2 className="heading-lg">
            {props.serviceData.subTitle}
          </h2>
          <p className="service__introduction text-xl">
            {props.serviceData.subIntro}
          </p>
        </div>
      </div>
    </div>
    <div className="service__slogan">
      <h2 className="heading-lg">{props.serviceData.slogan.title}</h2>
      <div className="service__slogan-grid">
        <div className="service__slogan-flex-box">
          <div className="service__slogan-item">
            <h3 className="heading-base service__slogan-title">
              {props.serviceData.slogan.leftContent.title}

            </h3>
            <p className="text-xl">{props.serviceData.slogan.leftContent.content}</p>
          </div>
        </div>
        <img className="service__line" src={line} alt="line" style={{ margin: '0 25px' }} />
        <div className="service__slogan-flex-box">
          <div className="service__slogan-item">
            <h3 className="heading-base service__slogan-title">
              {' '}
              {props.serviceData.slogan.centerContent.title}
            </h3>
            <p className="text-xl">{props.serviceData.slogan.centerContent.content}</p>
          </div>
        </div>
        <img className="service__line" src={line} alt="line" style={{ margin: '0 25px' }} />
        <div className="service__slogan-flex-box">
          <div className="service__slogan-item">
            <h3 className="heading-base service__slogan-title">
              {props.serviceData.slogan.rightContent.title}
            </h3>
            <p className="text-xl">{props.serviceData.slogan.rightContent.content}</p>
          </div>
        </div>
      </div>
    </div>
    <img className="service__dotted-square" src={yelllowCopy} alt="yellow-copy" />
    <div className="service__yellow-rectangle flex-box">
      <div className="flex-two">
        <h3 className="heading-base">{props.serviceData.archieves.title}</h3>
        <p className="text-lg">{props.serviceData.archieves.description}</p>
      </div>
      <div className="flex-one service__logos-wrapper">
        {props.serviceData.logos.map(image => <img className={`service__logo-${image.name}`} src={image.url} alt={image.name} loading="lazy" />)}
      </div>
    </div>
    <div className="service__other-services-container service__single-padding">
      <h3 className="service__other-services-title heading-base">Other services</h3>
      <div className="service__grid">
        {props.otherServiceImages.map(image => (
          <Link className="service__grid-item" to={`/services/${image.link}`}>
            <img src={image.url} alt={image.name} />
            <h4 className="service__grid-item-title">{image.title}</h4>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </section>
);

Service.propTypes = {
  otherServiceImages: PropTypes.array,
  serviceData: PropTypes.object,
};
export default Service;
