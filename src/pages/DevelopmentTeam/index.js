import React from 'react';
import Service from '../../components/Service/index';
import DevelopmentTeamData from '../../utils/DevelopmentTeam';
import dataOrdered from '../../utils/OtherServices';

const DevelopmentTeam = () => (
  <Service
    serviceData={DevelopmentTeamData}
    pageName="Services/Development Team"
    otherServiceImages={dataOrdered.developmentTeam}
  />
);

export default DevelopmentTeam;
