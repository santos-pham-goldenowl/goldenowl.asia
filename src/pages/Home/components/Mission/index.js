import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../../../../components/ArrowRight';

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
        <div className="col-12 col-md-4 col-lg-5 pr-md-0">
          <h3 className="missions__title">What are you looking for?</h3>
          <p>
            <strong>Business needs bespoke software.</strong>
            <br/>
            <br/>
              No matter what field you are in, business is tough. Since 2015, we’ve helped our clients harness the power of digital innovation through software in a variety of industries such as SaaS, ecommerce, legal, real estate,... 
            <br/>
            <br/>
              Whether you’re building something from scratch or improving an existing product, our design and development consultants have you covered. Our team works with you to nail down the goals of your project and translate those goals into actionable steps. 
            <br/>
            <br/>
              Or do you need to automate, orchestrate, coordinate, or transform your service-based business? Partner with us for custom software services focused on driving business results. Our technology mastery can help you pick the right tool for the challenge you face. 
          </p>
        </div>
        <div className="col-12 col-md-7 col-lg-6 ml-auto pr-0">
          <div className="row">
            <div className="col-6">
              <Link className="missions__item" to="/services/web-development">
                <h3 className="missions__item-title">Web development</h3>
                <ArrowRight className="missions__arrow" />
              </Link>
              <Link className="missions__item" to="/services/ux-ui-design">
                <h3 className="missions__item-title">UX UI design</h3>
                <ArrowRight className="missions__arrow" />
              </Link>
              <Link className="missions__item" to="/services/development-team">
                <h3 className="missions__item-title">Development team</h3>
                <ArrowRight className="missions__arrow" />
              </Link>
              {/* <Link className="missions__item">
                <h3 className="missions__item-title">IT Solutions Consulting</h3>
                <ArrowRight className="missions__arrow" />
              </Link> */}
            </div>
            <div className="col-6 pr-0">
              <Link
                className="missions__item"
                to="/services/mobile-development"
              >
                <h3 className="missions__item-title">Mobile development</h3>
                <ArrowRight className="missions__arrow" />
              </Link>
              <Link
                className="missions__item"
                to="/services/project-management"
              >
                <h3 className="missions__item-title">Project management</h3>
                <ArrowRight className="missions__arrow" />
              </Link>
              {/* <Link
                className="missions__item"
              >
                <h3 className="missions__item-title">Automation Testing</h3>
                <ArrowRight className="missions__arrow" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;
