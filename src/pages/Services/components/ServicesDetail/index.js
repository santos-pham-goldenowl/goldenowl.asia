import React from 'react';
import { Link } from 'react-router-dom';

import objectToArray from '../../../../utils/objectToArray';
import { ServicesDetailContent } from '../../../../utils/servicesDetail';
import aosDirection from '../../../../utils/aosItemDirection';

import './index.sass';

const ServicesDetail = () => (
  <section className="services-detail">
    <div className="row services-detail__links">
      {objectToArray(ServicesDetailContent).map((content, index) => (
        <div key={content.key} className="col-12 col-md-4 link-wrapper" data-aos={aosDirection(index)}>
          <Link to={`/services/${content.link}`}>
            <div className="img-wrapper w-100">
              <img id={`go-${content.link}`} src={content.url} alt={content.key} />
            </div>
            <div className="card-content">
              <h5>{content.key}</h5>
              {content.content}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesDetail;
