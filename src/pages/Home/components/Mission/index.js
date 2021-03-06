import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../../assets/images/bg.svg';
import './index.sass';

const Missions = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  };

  return (
    <section className="missions" style={sectionStyle}>
      <div className="row">
        <div className="col-12 col-md-5 pr-md-0" data-aos="fade-right">
          <h3 className="missions__title">Hello! We're Golden Owl</h3>
          <p>
            If you’re looking for a software company to transform your business
            to the next level, you've found the right partner to help.
            <br />
            <br />
            We are strongly recommended by technical and non-technical leaders
            in various industries including retail, ecommerce, real estate,
            legal, travel & hospitality,...
            <br />
            <br />
            Our reputation is built on engineering standards, development
            standards, our work ethic and responsive workflow. It's the work
            that we push out to the world that speaks most about us.
          </p>
        </div>
        <div className="col-12 col-md-6 ml-auto pr-0">
          <div className="row">
            <div className="col-6">
              <Link className="missions__item" to="/services/web-development" data-aos="fade-up">
                <h3 className="missions__item-title">Web development</h3>
                <div className="missions__arrow" />
              </Link>
              <Link className="missions__item" to="/services/ux-ui-design" data-aos="fade-up">
                <h3 className="missions__item-title">UX UI design</h3>
                <div className="missions__arrow" />
              </Link>
              <Link className="missions__item" to="/services/development-team" data-aos="fade-up">
                <h3 className="missions__item-title">Development team</h3>
                <div className="missions__arrow" />
              </Link>
              <Link
                className="missions__item"
                to="/services/it-solutions-consulting"
                data-aos="fade-up"
              >
                <h3 className="missions__item-title">
                  IT solutions consulting
                </h3>
                <div className="missions__arrow" />
              </Link>
            </div>
            <div className="col-6 pr-0">
              <Link
                className="missions__item"
                to="/services/mobile-development"
                data-aos="fade-up"
              >
                <h3 className="missions__item-title">Mobile development</h3>
                <div className="missions__arrow" />
              </Link>
              <Link
                className="missions__item"
                to="/services/project-management"
                data-aos="fade-up"
              >
                <h3 className="missions__item-title">Project management</h3>
                <div className="missions__arrow" />
              </Link>
              <Link
                className="missions__item"
                to="/services/automation-testing"
                data-aos="fade-up"
              >
                <h3 className="missions__item-title">Automation testing</h3>
                <div className="missions__arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;
