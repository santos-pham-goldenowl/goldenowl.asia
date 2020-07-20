import React from 'react';

import { firstRow, secondRow } from '../../../../utils/logoSlider';
import './index.sass';

const RunningPanels = () => (
  <section>
    <div className="slider">
      <div className="slide-track">
        {firstRow.map((item, index) => (
          <div key={`logo${index * -1}`} className="slide" style={{ backgroundImage: `url(${item})` }} />
        ))}
      </div>
    </div>
    <div className="slider reverse">
      <div className="slide-track-reverse">
        {secondRow.map((item, index) => (
          <div key={`logo${index * -1}`} className="slide" style={{ backgroundImage: `url(${item})` }} />
        ))}
      </div>
    </div>
  </section>
);

export default RunningPanels;
