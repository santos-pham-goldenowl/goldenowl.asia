import React from 'react';

import companyQuality1 from '../../../../assets/images/qualities/1.png';
import companyQuality2 from '../../../../assets/images/qualities/2.png';
import companyQuality3 from '../../../../assets/images/qualities/3.png';

import './index.sass';

const CompanyQualities = () => (
  <section className="qualities">
    <h3 className="qualities__title">Why clients choose us</h3>
    <p className="qualities__highlights">Because it’s good to work with good people!</p>
    <div className="row">
      <div className="col-12 col-md-4 qualities__items d-block">
        <img src={companyQuality1} alt="Golden Owl Asia" />
        <h5>Trustworthy & Professional</h5>
        <div className="d-flex">
          <p>
            Golden Owl is one of the leading outsourcing software development companies in Vietnam.
          </p>
        </div>
        <div className="d-flex">
          <p className="bottom-line">
            By collaborating with us, you can save time to focus on planning and operating your core business.
            We bring professional manners into the project.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 qualities__items d-block">
        <img src={companyQuality2} alt="Key success" />
        <h5>
          Flexibility & Transparency
        </h5>
        <div className="d-flex">
          <p>
            Our strengths lie in solid expertise of a wide range of technologies and the team flexibility to fit clients
            needs.
          </p>
        </div>
        <div className="d-flex">
          <p className="bottom-line">
            Each and every step of our work is always kept transparent with our clients from the beginning to the end.
            Our working process lets clients to track and know exactly where the team is at any point.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 qualities__items d-block">
        <img src={companyQuality3} alt="We create" />
        <h5>Compliance & Commitment</h5>
        <div id="need-line-break" className="d-flex">
          <p>
            We follow all the legal procedures of trading with our clients to make sure that no one has to face any legal issue.
          </p>
        </div>
        <div className="d-flex">
          <p className="bottom-line">
            Clients choosing us know that their final deliverables will be incredible, high-performing products.
            From complex systems and infrastructures to creative development projects, we have done it all with a
            game-changing spirit and willingness to go extra miles to help.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyQualities;
