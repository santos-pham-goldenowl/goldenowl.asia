import React from 'react'

import './index.sass'
import companyQuality1 from '../../../../assets/images/qualities/1.png'
import companyQuality2 from '../../../../assets/images/qualities/2.png'
import companyQuality3 from '../../../../assets/images/qualities/3.png'

const CompanyQualities = () => (
  <section className="qualities">
    <h3 className="qualities__title"> Why choose us</h3>
    <div className="row">
      <div className="col-12 col-md-4 qualities__items d-block">
        <img src={companyQuality1} alt="Golden Owl Asia" />
        <h5>Our Company</h5>
        <div className="d-flex">
          <p>
              A leading name in providing exceptional technology solutions and
              services that always adhere to globally recognized standards and
              latest technology trends.
          </p>
        </div>
        <div className="d-flex">
          <p className="bottom-line">
              Value clear rules, relationships based on trust, dialogue and
              through the quality of services provided.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 qualities__items d-block">
        <img src={companyQuality2} alt="Key success" />
        <h5>
            Key success: time & materials
          <br />
            working model which
        </h5>
        <div className="d-flex">
          <p>Provides flexible solution for dynamic requirements.</p>
        </div>
        <div className="d-flex">
          <p>
              Only pay for actual work completed while saving time on the
              project.
          </p>
        </div>
        <div className="d-flex">
          <p className="bottom-line">
              Allows Clients to track progress and know exactly where the team
              is at any point. It is ending up with a better product reduces the
              business risk of the enterprise.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 qualities__items d-block">
        <img src={companyQuality3} alt="We create" />
        <h5>We create</h5>
        <div className="d-flex">
          <p>
              The unspoken international rule of business which is the offshore
              development center.
          </p>
        </div>
        <div className="d-flex">
          <p className="bottom-line">
              The advantages of the energy, skill of the developers, the
              expanding potential of your business, and the best price offered.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default CompanyQualities
