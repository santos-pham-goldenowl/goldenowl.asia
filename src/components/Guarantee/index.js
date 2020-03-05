import React from 'react';
import CheckPoint from '../CheckPoint';
import './index.sass';

const Guarantee = () => (
  <section className="guarantee">
    <h3 className="heading-base guarantee__title">We guarantee</h3>
    <div className="guarantee__grid">
      <div>
        <h5 className="heading-x-small">Deliver the most high-quality product</h5>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg"> Elegant design</p>
        </div>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg">Absolute security</p>
        </div>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg">High degree of stability</p>
        </div>
      </div>
      <div>
        <h5 className="heading-x-small">Provide the best solution so that customer gets the greatest benefit</h5>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg">Meet the customer requirements with latest technologies</p>
        </div>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg">Provide a scalable system</p>
        </div>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg">With lowest cost solution</p>
        </div>
      </div>
      <div>
        <h5 className="heading-x-small">Provide maintenance/ improvement</h5>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg"> Endurance: Endurance before errors, large number of users/request</p>
        </div>
        <div className="guarantee__checkpoint-box">
          <CheckPoint />
          <p className="text-lg">Easy to extends in the future</p>
        </div>
      </div>
    </div>
  </section>
);

export default Guarantee;
