import React from 'react';
import ArrowRight from '../ArrowRight';
import './index.sass';

function Missions() {
  return (
    <section className="missions">
      <div className="missions__left-side">
        <h2>What we do</h2>
        <p>
          Lorem ipsum dolor sit amet, natum persequeris vel cu. Nominavi temporibus ad sit. Pri nonumy laudem complectitur ea. Modus eloquentiam id has.
        </p>
      </div>
      <div className="missions__right-side">
        <div>
          <div className="missions__item">
            <h3>Web development</h3>
            <ArrowRight />
          </div>
          <div className="missions__item">
            <h3>UX UI design</h3>
            <ArrowRight />
          </div>
          <div className="missions__item">
            <h3>Development team</h3>
            <ArrowRight />
          </div>
        </div>
        <div>
          <div className="missions__item">
            <h3>Mobile development</h3>
            <ArrowRight />
          </div>
          <div className="missions__item">
            <h3>Project management</h3>
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Missions;
