import React from "react";

import "./index.sass";
import testimonials from "../../../../utils/testimonials";
import objectToArray from "../../../../utils/objectToArray";
import ArrowRight from "../../../../components/ArrowRight";

const TestimonialsList = () => (
  <section className="testimonials-list">
    <h3 className="text-center">Customer’s love</h3>
    {objectToArray(testimonials).map((item, index) =>
      index % 2 === 0 ? (
        <div className="row testimonials-list__item">
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
                <ArrowRight width="33px" left="33px" />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row testimonials-list__item">
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
                <ArrowRight width="33px" left="33px" />
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
