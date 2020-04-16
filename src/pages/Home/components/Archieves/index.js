import React from 'react';
import archieves from '../../../../utils/archives';
import objectToArray from '../../../../utils/objectToArray';

import './index.sass';

const Archieves = () => {
 
  return (
    <section className="archieves d-block">
      <div className="row justify-content-center">
        <p className="archieves__title text-center">
          <strong>Trusted by hundreds of businesses so far</strong>
          <br/>
          Our clients are from all over the world and are doing amazing things
        </p>
      </div>
      <div className="archieves__main-content row">
        {objectToArray(archieves).map((item) => (
          <div className="col-6 col-md-2 d-block archieves__item">
            <center>
              <h2>{item.number}</h2>
              <p>{item.key}</p>
            </center>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archieves;
