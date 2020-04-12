import React from 'react';
import archieves from '../../../../utils/archives';
import objectToArray from '../../../../utils/objectToArray';
import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import './index.sass';

const Archieves = () => {
  const isMobile = useMobileWidth();

  return (
    <section className="archieves d-block">
      <div className="row justify-content-center">
        <p className="archieves__title text-center">
          {isMobile
            ? 'Worldwide Cutomer’s base: Singapore, Australia, UK, Hong Kong, the US and more…'
            : (
              <>
                Worldwide Cutomer’s base: Singapore, Australia, UK,
                {' '}
                <br />
                {' '}
                Hong Kong, the US and more…
              </>
            )}
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
