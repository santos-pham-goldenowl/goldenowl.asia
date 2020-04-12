import React from 'react';
import { Link } from 'react-router-dom';

import objectToArray from '../../../../utils/objectToArray';
import { ServicesDetailContent } from '../../../../utils/servicesDetail';

import './index.sass';

const ServicesDetail = () => (
  <section className="services-detail">
    <div className="row justify-content-center services-detail__links">
      {objectToArray(ServicesDetailContent).map((content) => (
        <div key={content.key} className="col-12 col-md-4 link-wrapper">
          <Link to={`/services/${content.link}`}>
            <div className="img-wrapper w-100">
              <img id={`go-${content.link}`} src={content.url} alt={content.key} />
            </div>
            <div className="card-content">
              <h5>{content.key}</h5>
              <p>{content.content}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesDetail;
