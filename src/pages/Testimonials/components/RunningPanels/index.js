import React from "react";

import { firstRow, secondRow } from "../../../../utils/logoSlider";
import "./index.sass";

const RunningPanels = () => (
  <section className="running-panels">
    <div className="placeholder-row">
      <div className="row">
        {firstRow.map((item, index) => (
          <div key={`logo-${index}`} className="col-md-2 d-flex align-items-center justify-content-center">
            <img className="placeholder-img" src={item} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
    {/* <div className="running-panels__wrapper">
      <div className="byKaOp">
        <div id="first-row" className="kYqVPf">
          {firstRow.map((item, index) => (
            <div className="epjWln">
              <img
                className="gTxaYB"
                src={item}
                alt={`first-row-logo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="itNaut">
        <div id="first-row" className="kYqVPf">
          {firstRow.map((item, index) => (
            <div className="epjWln">
              <img
                className="gTxaYB"
                src={item}
                alt={`first-row-logo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="doEdSu">
        <div id="first-row" className="kYqVPf">
          {firstRow.map((item, index) => (
            <div className="epjWln">
              <img
                className="gTxaYB"
                src={item}
                alt={`first-row-logo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div> */}
  </section>
);

export default RunningPanels;
