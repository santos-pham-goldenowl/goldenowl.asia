import React from 'react';
import SlideCarousel from '../SlideCarousel/index';
import partnersLogo from '../../utils/PartnersLogo';
import './index.sass';

function Partners() {
  return (
    <section className="partners">
      <h2 className="partners__title">
        We partner with the world's best
      </h2>
      <SlideCarousel content={partnersLogo} />
    </section>
  );
}

export default Partners;
