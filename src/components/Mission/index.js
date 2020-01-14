import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="missions__item" to="/services/web-development">
            <h3 className="missions__item-title">Web development</h3>
            <ArrowRight width="33px" left="33px" />
          </Link>
          <Link className="missions__item" to="/services/ux-ui">
            <h3 className="missions__item-title">UX UI design</h3>
            <ArrowRight width="33px" left="33px" />
          </Link>
          <Link className="missions__item" to="/services/development-team">
            <h3 className="missions__item-title">Development team</h3>
            <ArrowRight width="33px" left="33px" />
          </Link>
        </div>
        <div>
          <Link className="missions__item" to="/services/mobile-development">
            <h3 className="missions__item-title">Mobile development</h3>
            <ArrowRight width="33px" left="33px" />
          </Link>
          <Link className="missions__item" to="/services/project-management">
            <h3 className="missions__item-title">Project management</h3>
            <ArrowRight width="33px" left="33px" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Missions;
