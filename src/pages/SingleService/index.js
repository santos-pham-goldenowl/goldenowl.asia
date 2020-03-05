import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import BreadCrumb from '../../components/BreadCrumb';
import Footer from '../../components/Footer';
import './index.sass';
import objectToArray from '../../utils/objectToArray';
import yelllowCopy from '../../assets/images/rectangle-copy.svg';
import line from '../../assets/images/line.svg';

const SingleService = ({ content }) => {
  const { key } = content;
  return (
    <section className="service">
      <MainHeader />
      <SubHeader />
      <BreadCrumb>
        <Link to="/services">Services</Link>
        <span>/</span>
        <p>{key}</p>
      </BreadCrumb>
      <section className="service__first-content">
        <div className="row">
          <h1>
            {key}
          </h1>
        </div>
        <div className="row">
          <p>
            {content.first.content}
          </p>
        </div>
        <div className="image-wrapper">
          <img src={content.cover} alt="cover" />
        </div>
      </section>
      <section className="service__second-content">
        <h2>
          {content.second.title}
        </h2>
        <p>
          {content.second.content}
        </p>
      </section>
      {/* <section className="service__slogan">
        <h2 className="heading-lg">Simple and powerful</h2>
        <div className="service__slogan-grid">
          <div className="col-lg-4">
            <div className="service__slogan-item">
              <h3 className="heading-base service__slogan-title">
                {content.third.left.title}

              </h3>
              <p className="text-xl">{content.third.left.content}</p>
            </div>
          </div>
          <img className="service__line" src={line} alt="line" style={{ margin: '0 25px' }} />
          <div className="col-lg-4">
            <div className="service__slogan-item">
              <h3 className="heading-base service__slogan-title">
                {content.third.center.title}
              </h3>
              <p className="text-xl">{content.third.center.content}</p>
            </div>
          </div>
          <img className="service__line" src={line} alt="line" style={{ margin: '0 25px' }} />
          <div className="col-lg-4">
            <div className="service__slogan-item">
              <h3 className="heading-base service__slogan-title">
                {content.third.right.title}
              </h3>
              <p className="text-xl">{content.third.right.content}</p>
            </div>
          </div>
        </div>
      </section>
      <img className="service__dotted-square" src={yelllowCopy} alt="yellow-copy" />
      <div className="service__yellow-rectangle flex-box">
        <div className="flex-two">
          <h3 className="heading-base">{content.fourth.title}</h3>
          <p className="text-lg">{content.fourth.content}</p>
        </div>
        <div className="flex-one service__logos-wrapper">
          {objectToArray(content.fourth.logos).map(image => <img key={image.name} src={image.url} alt={image.name} loading="lazy" />)}
        </div>
      </div>
      <section className="service__other-services-container service__single-padding">
        <h3 className="service__other-services-title heading-base">Other services</h3>
        <div className="service__grid">
          {objectToArray(content.navs).map(image => (
            <Link className="service__grid-item" to={`/services/${image.url}`}>
              <img src={image.imgUrl} alt={image.title} />
              <h4 className="service__grid-item-title">{image.title}</h4>
            </Link>
          ))}
        </div>
      </section> */}
      <Footer />
    </section>
  );
};

export default SingleService;
