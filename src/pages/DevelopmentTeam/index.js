import React from 'react';
import Service from '../../components/Service/index';
import DevelopmentTeamData from '../../utils/DevelopmentTeam';
import dataOrdered from '../../utils/OtherServices';
import './index.sass';

const DevelopmentTeam = () => (
  <div className="development-team-container">
    <Service
      serviceData={DevelopmentTeamData}
      pageName="Services/Development Team"
      otherServiceImages={dataOrdered.developmentTeam}
    />
  </div>
);

export default DevelopmentTeam;
