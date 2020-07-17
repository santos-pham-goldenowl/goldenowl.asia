import React from 'react';
import './index.sass';

const TechnologyCards = () => (
  <section className="technology-cards">
    <div className="row">
      <div className="col-md-6">
        <div className="technology-cards__card text-center" data-aos="flip-left">
          <h4>Optimal solutions</h4>
          <p>
            We understand that your growth is key to our, and therefore our mission is not just to deliver what we are
            ordered to, but also to advise and search for more optimal solutions for your business.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="technology-cards__card text-center" data-aos="flip-right">
          <h4>Custom solutions</h4>
          <p>
            We listen to your ideas and create custom software solutions from the ground up, designed especially for your business.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TechnologyCards;
