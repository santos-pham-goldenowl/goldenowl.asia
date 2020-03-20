import React from "react";

import "./index.sass";
import TabContainer from "../../../../components/Tabs/TechTabs";

const TechnologyDetail = () => (
  <section className="technology-detail">
    <div className="row">
      <h3 className="d-block text-center w-100">Tech we use</h3>
      <p className="technology-detail__description d-block text-center w-100">
        We apply the most modern technology to every single project to make it
        <br />
        become the state of the art.
      </p>
      <div className="col-12">
        <TabContainer />
      </div>
    </div>
  </section>
);

export default TechnologyDetail;
