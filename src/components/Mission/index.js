import React from 'react';
import ArrowRight from '../ArrowRight';
import './index.sass';

function Missions() {
  return (
    <section className="missions">
      <div className="missions__left-side">
        <h2 className="missions__title">What we do</h2>
        <p>
          Lorem ipsum dolor sit amet, natum persequeris vel cu. Nominavi temporibus ad sit. Pri nonumy laudem complectitur ea. Modus eloquentiam id has.
        </p>
      </div>
      <div className="missions__right-side">
        <div>
          <div className="missions__item">
            <h3 className="missions__item-title">Web development</h3>
            <ArrowRight width="33px" left="33px" />
          </div>
          <div className="missions__item">
            <h3 className="missions__item-title">UX UI design</h3>
            <ArrowRight width="33px" left="33px" />
          </div>
          <div className="missions__item">
            <h3 className="missions__item-title">Development team</h3>
            <ArrowRight width="33px" left="33px" />
          </div>
        </div>
        <div>
          <div className="missions__item">
            <h3 className="missions__item-title">Mobile development</h3>
            <ArrowRight width="33px" left="33px" />
          </div>
          <div className="missions__item">
            <h3 className="missions__item-title">Project management</h3>
            <ArrowRight width="33px" left="33px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Missions;
