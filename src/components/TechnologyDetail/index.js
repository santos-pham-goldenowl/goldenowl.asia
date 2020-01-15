import React from 'react';
import './index.sass';
import TabContainer from '../Tabs/index';

const TechnologyDetail = () => {
  return (
    <section className="technology-detail">
      <h3 className="technology-detail__title heading-base">Techs we use</h3>
      <p className="technology-detail__short-description text-xl">
        Lorem ipsum dolor sit amet, natum persequeris vel cu. Nominavi temporibus ad sit. Pri nonumy laudem complectitur ea. Modus eloquentiam id has.
      </p>
      <TabContainer />
      <div className="technology-detail__paragraphs">
        <div>
          <h4 className="heading-small">Lorem ipsum dolor sit amet</h4>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div>
          <h4 className="heading-small">Lorem ipsum dolor sit amet</h4>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
          <p className="text-lg">
            Eos simul legimus gubergren ea. Nam ne saepe mandamus volutpat, pro ad aperiam discere luptatum. Pri ex meis electram laboramus, possit aperiam ex qui. Eos quod vivendo gloriatur ad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnologyDetail;
