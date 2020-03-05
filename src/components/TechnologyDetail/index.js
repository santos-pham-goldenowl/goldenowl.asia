import React from 'react';

import './index.sass';
import TabContainer from '../Tabs/TechTabs';

const TechnologyDetail = () => (
  <section className="technology-detail">
    <h3 className="technology-detail__title heading-base">Techs we use</h3>
    <p className="technology-detail__short-description text-xl">
      We apply the most modern technology to every single project to make it
      {' '}
      <br />
      {' '}
become the state of the art.
    </p>
    <TabContainer />
    <div className="technology-detail__paragraphs">
      <div>
        <h4 className="heading-small">Modern technology</h4>
        <p className="text-lg">
          The technology is changing and growing constantly with the advent of new technologies as well as the upgrading of old ones to a higher level. Golden Owl is proud of our update ability and promises to bring the most all-around software solution to clients.
        </p>
      </div>
      <div>
        <h4 className="heading-small">Low cost solutions</h4>
        <p className="text-lg">
          We not only deliver products that optimize your business but also help to cut the cost which must be paid for a software product. Nowhere can you find a company that provides software services with reasonable price like us.
        </p>
      </div>
    </div>
  </section>
);


export default TechnologyDetail;
