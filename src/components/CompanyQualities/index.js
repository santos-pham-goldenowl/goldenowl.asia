import React from 'react';
import CheckPoint from '../CheckPoint';
import './index.sass';

function CompanyQualities() {
  return (
    <section className="qualities">
      <h3 className="qualities__title heading-base"> Why choose us</h3>
      <div className="qualities__main-content">
        <div className="qualities__items">
          <h5 className="heading-x-small">Golden Owl Asia</h5>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              A leading name in providing exceptional technology solutions and services that always adhere to globally recognized standards and latest technology trends.
            </p>
          </div>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              Value clear rules, relationships based on trust, dialogue and through the quality of services provided
            </p>
          </div>
        </div>
        <div className="qualities__items qualities__key-success-wrapper">
          <h5 className="heading-x-small">
            Key success: time & materials working model which
          </h5>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              Provides flexible solution for dynamic requirements
            </p>
          </div>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              Only pay for actual work completed while saving time on the project.
            </p>
          </div>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              Allows Clients to track progress and know exactly where the team is at any point. It is ending up with a better product reduces the business risk of the enterprise
            </p>
          </div>
        </div>
        <div className="qualities__items">
          <h5 className="heading-x-small">
            We create
          </h5>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              The unspoken international rule of business which is the offshore development center
            </p>
          </div>
          <div className="qualities__item-flex">
            <CheckPoint />
            <p className="text-lg">
              The advantages of the energy, skill of the developers, the expanding potential of your business, and the best price offered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyQualities;
