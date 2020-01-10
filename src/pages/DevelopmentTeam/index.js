import React from 'react';
import Service from '../../components/Service/index';
import WebDevelopmentData from '../../utils/WebDevelopment';
import coverImage from '../../assets/images/service_logos/DevelopmentTeam/cover.svg';
import dataOrdered from '../../utils/OtherServices';

const DevelopmentTeam = () => (
  <Service
    coverImage={coverImage}
    serviceData={WebDevelopmentData}
    pageName="Services/Development Team"
    otherServiceImages={dataOrdered.developmentTeam}
  />
);

export default DevelopmentTeam;
