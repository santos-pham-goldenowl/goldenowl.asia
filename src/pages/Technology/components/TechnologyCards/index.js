import React from "react";

import "./index.sass";

const TechnologyCards = () => (
  <section className="technology-cards">
    <div className="row">
      <div className="col-md-6">
        <div className="technology-cards__card text-center">
          <h4>Modern technology</h4>
          <p>
            The technology is changing and growing constantly with the advent of
            new technologies as well as the upgrading of old ones to a higher
            level. Golden Owl is proud of our update ability and promises to
            bring the most all-around software solution to clients.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="technology-cards__card text-center">
          <h4>Low cost solutions</h4>
          <p>
            We not only deliver products that optimize your business but also
            help to cut the cost which must be paid for a software product.
            Nowhere can you find a company that provides software services with
            reasonable price like us.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TechnologyCards;
