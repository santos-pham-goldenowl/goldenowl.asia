import React from "react";

import testimonials from "../../../../utils/testimonials";
import objectToArray from "../../../../utils/objectToArray";
import ArrowRight from "../../../../components/ArrowRight";

import "./index.sass";

const TestimonialsList = () => (
  <section className="testimonials-list">
    <h3 className="text-center">Customer’s love</h3>
    {objectToArray(testimonials).map((item, index) =>
      index % 2 === 0 ? (
        <div key={item.key} className="row testimonials-list__item">
          <div className="col-md-6">
            <div>
              <img className="w-100" src={item.avatar} alt="some pic" />
            </div>
          </div>
          <div className="ml-auto col-md-6">
            <div className="testimonials-list__item-text">
              <h4>
                {item.key}: {item.main}
              </h4>
              <p>{item.details}</p>
              <img className="logo" src={item.companyLogo} />
              <p className="title">{item.title}</p>
              <p className="case-study d-flex align-items-center">
                VIEW CASE STUDY
                <ArrowRight className="case-study__arrow" />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div key={item.key} className="row testimonials-list__item">
          <div className="ml-auto col-md-6">
            <div>
              <h4>
                {item.key}: {item.main}
              </h4>
              <p>{item.details}</p>
              <img className="logo" src={item.companyLogo} />
              <p className="title">{item.title}</p>
              <p className="case-study d-flex align-items-center">
                VIEW CASE STUDY
                <ArrowRight className="case-study__arrow" />
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div>
              <img className="w-100" src={item.avatar} alt="some pic" />
            </div>
          </div>
        </div>
      )
    )}
  </section>
);

export default TestimonialsList;
