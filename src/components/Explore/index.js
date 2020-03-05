import React from 'react';

import ArrowRight from '../ArrowRight';
import laptop from '../../assets/images/3.png';
import './index.sass';

const Explore = () => (
  <section className="explore">
    <div>
      <div className="explore__top-content">
        <h6>BID4SKILL | FEATURES CASE STUDY</h6>
        <div className="explore__case-study">
          <h6 style={{ paddingRight: 20 }}>VIEW ALL CASE STUDY</h6>
          <ArrowRight width="33px" left="33px" />
        </div>
      </div>
      <p className="explore__description">Lorem ipsum dolor sit amet, iudico oratio eos ex. Duo ludu.</p>
      <div className="explore__image-wrapper">
        <img className="explore__image" src={laptop} alt="computer" loading="lazy" />
      </div>
    </div>
  </section>
);

export default Explore;
