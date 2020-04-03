import React from "react";

import useMobileWidth from "../../../../utils/hooks/useMobileWidth";

import "./index.sass";

const Archieves = () => {
  const isMobile = useMobileWidth();

  return (
    <section className="archieves d-block">
      <div className="row justify-content-center">
        {isMobile ? (
          <p className="archieves__title text-center">
            Worldwide Cutomer’s base: Singapore, Australia, UK, Hong Kong, the
            US and more…
          </p>
        ) : (
          <p className="archieves__title text-center">
            Worldwide Cutomer’s base: Singapore, Australia, UK,
            <br />
            Hong Kong, the US and more…
          </p>
        )}
      </div>
      <div className="archieves__main-content row">
        <div className="col-6 col-md-2 d-block archieves__item">
          <center>
            <h2>129</h2>
            <p>Number of successful project</p>
          </center>
        </div>
        <div className="col-6 col-md-2 d-block archieves__item">
          <center>
            <h2>7+</h2>
            <p>Countries</p>
          </center>
        </div>
        <div className="col-6 col-md-2 d-block archieves__item">
          <center>
            <h2>60+</h2>
            <p>Team member</p>
          </center>
        </div>
        <div className="col-6 col-md-2 d-block archieves__item">
          <center>
            <h2>4+</h2>
            <p>Year in the market</p>
          </center>
        </div>
        <div className="col-6 col-md-2 d-block archieves__item">
          <center>
            <h2>30+</h2>
            <p>Mobile app</p>
          </center>
        </div>
        <div className="col-6 col-md-2 d-block archieves__item">
          <center>
            <h2>45+</h2>
            <p>Website</p>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Archieves;
