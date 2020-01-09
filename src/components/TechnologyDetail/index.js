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
      <div className="technology-detail__paragraphs">
        <div>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, exerci audiam rationibus ei ius. At nam altera malorum maiorum, id vero offendit petentium vel. Qui id agam convenire. In dicam reprehendunt his. Singulis scribentur eum eu, mea putent neglegentur te.
          </p>
          <p>
            Eos simul legimus gubergren ea. Nam ne saepe mandamus volutpat, pro ad aperiam discere luptatum. Pri ex meis electram laboramus, possit aperiam ex qui. Eos quod vivendo gloriatur ad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnologyDetail;
