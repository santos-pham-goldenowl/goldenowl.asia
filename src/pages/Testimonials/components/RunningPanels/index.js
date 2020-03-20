import React from "react";

import { firstRow, secondRow } from "../../../../utils/logoSlider";

import "./index.sass";

const RunningPanels = () => (
  <section className="running-panels">
    <div className="placeholder-row">
      <div className="row">
        {firstRow.map((item, index) => (
          <div
            key={`logo-${index}`}
            className="col-md-2 d-flex align-items-center justify-content-center"
          >
            <img className="placeholder-img" src={item} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RunningPanels;
