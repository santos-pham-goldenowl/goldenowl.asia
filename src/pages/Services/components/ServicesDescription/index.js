import React from "react";

import present from "../../../../assets/images/service_description.png";
import Bg from "../../../../assets/images/wavy_bg_2.png";

import "./index.sass";

const ServicesDescription = () => {
  const sectionStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "100vw"
  };

  return (
    <section className="services-description" style={sectionStyle}>
      <div className="row">
        <div className="col-md-5">
          <h2 className="services-description__title">SERVICES</h2>
          <p className="">
            We provide software solutions, mostly about website and mobile
            applications for a wide variety of fields, from finance to commerce
            and so on. We are proud of being very selective and have one of the
            best full-stacked developer training programs in Ho Chi Minh City.
          </p>
        </div>
        <div className="col-md-6 ml-auto">
          <img src={present} alt="present" />
        </div>
      </div>
    </section>
  );
};

export default ServicesDescription;
