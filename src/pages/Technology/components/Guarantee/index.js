import React from 'react';
import CheckPoint from '../../../../components/CheckPoint';
import './index.sass';

const Guarantee = () => (
  <section className="guarantee">
    <div className="row">
    <h3 className="d-block w-100 text-center">Our guarantees</h3>
      <div className="col-md-4">
        <h5>High quality product</h5>
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Brought by top-level skills</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Stability, secured and scalable product</p>
        </div>
        <br />
        {/* <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>High degree of stability</p>
        </div> */}
      </div>
      <div className="col-md-4">
        <h5 id="middle-title">
          Valuable solutions that fit your need
        </h5>
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Make sure we understand your goals</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Choose right technologies for your project</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Save your time & money without dropping the quality</p>
        </div>
      </div>
      <div className="col-md-4">
        <h5>Maintenance and Improvement</h5>
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>
          Endurance: error, increase of users
          </p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Update your digital product in the future</p>
        </div>
      </div>
    </div>
  </section>
);

export default Guarantee;
