import React from 'react';
import './index.sass';
import TabContainer from '../Tabs/index';

const TechnologyDetail = () => {
  return (
    <section className="technology-detail">
      <h3 className="technology-detail__title">Techs we use</h3>
      <p className="technology-detail__short-description">
        Lorem ipsum dolor sit amet, natum persequeris vel cu. Nominavi temporibus ad sit. Pri nonumy laudem complectitur ea. Modus eloquentiam id has.
      </p>
      <TabContainer />
    </section>
  );
}

export default TechnologyDetail;
