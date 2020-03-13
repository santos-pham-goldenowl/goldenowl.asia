import React from 'react';
import code from '../../assets/images/code.svg';
import './index.sass';

const Develop = () => (
  <section className="develop">
    <h2 className="develop__title heading-base">
      Develop with tools you already love
    </h2>
    <div className="flex-box">
      <div className="develop__left-side">
        <h3 className="develop__left-side-title heading-base">
          Work with your beloved and familiar language
        </h3>
        <p className="develop__paragraph text-xl">
          Golden Owl - we have a team that is expert at different programming languages so whatever your favourite language is, we are always here to turn it into your wanted product.
        </p>
      </div>
      <div className="develop__right-side">
        <img className="develop__image" src={code} alt="code" />
      </div>
    </div>
  </section>
)

export default Develop;
