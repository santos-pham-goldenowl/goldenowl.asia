import React, { Component } from 'react';
import CheckPoint from './CheckPoint';
import '../styles/CompanyQualities.sass';

class CompanyQualities extends Component {
  render() {
    return(
      <section className='qualities'>
        <h2> Why choose us</h2>
        <div className='qualities__main-content'>
          <div className='qualities__items'>
            <h4>Golden Owl Asia</h4>
            <div className='qualities__item-flex'>
              <CheckPoint />
              <p>
                A leading name in providing exceptional technology solutions and services that always adhere to globally recognized standards and latest technology trends.
              </p>
            </div>
            <div className='qualities__item-flex'>
              <CheckPoint />
              <p>
                Value clear rules, relationships based on trust, dialogue and through the quality of services provided
              </p>
            </div>
          </div>
          <div className='qualities__items qualities__key-success-wrapper'>
            <h4>
              Key success: time & materials working model which
            </h4>
            <div className='qualities__item-flex'>
              <CheckPoint />
              <p>
                Provides flexible solution for dynamic requirements
              </p>
            </div>
            <div className='qualities__item-flex'>
              <CheckPoint/>
              <p>
                Only pay for actual work completed while saving time on the project.
              </p>
            </div>
            <div className='qualities__item-flex'>
              <CheckPoint />
              <p>
                Allows Clients to track progress and know exactly where the team is at any point. It is ending up with a better product reduces the business risk of the enterprise
              </p>
            </div>
          </div>
          <div className='qualities__items'>
            <h4>
              We create
            </h4>
            <div className='qualities__item-flex'>
              <CheckPoint />
              <p>
                The unspoken international rule of business which is the offshore development center
              </p>
            </div>
            <div className='qualities__item-flex'>
              <CheckPoint />
              <p>
                The advantages of the energy, skill of the developers, the expanding potential of your business, and the best price offered.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyQualities;
