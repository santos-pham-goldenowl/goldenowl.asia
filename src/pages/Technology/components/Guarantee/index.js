import React from "react";

import CheckPoint from "../../../../components/CheckPoint";

import "./index.sass";

const Guarantee = () => (
  <section className="guarantee">
    <div className="row">
      <h3 className="d-block w-100 text-center">We guarantee</h3>
      <div className="col-md-4">
        <h5>Deliver the most high-quality product</h5>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Elegant design</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Absolute security</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>High degree of stability</p>
        </div>
      </div>
      <div className="col-md-4">
        <h5 id="middle-title">
          Provide the best solution so that customer gets the greatest benefit
        </h5>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Meet the customer requirements with latest technologies</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Provide a scalable system</p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>With lowest cost solution</p>
        </div>
      </div>
      <div className="col-md-4">
        <h5>Provide maintenance/ improvement</h5>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>
            Endurance: Endurance before errors, large number of users/request
          </p>
        </div>
        <br />
        <div className="d-flex guarantee__line">
          <CheckPoint />
          <p>Easy to extends in the future</p>
        </div>
      </div>
    </div>
  </section>
);

export default Guarantee;
