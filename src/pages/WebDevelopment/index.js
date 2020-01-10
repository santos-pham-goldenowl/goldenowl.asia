import React from 'react';
import Service from '../../components/Service/index';
import WebDevelopmentData from '../../utils/WebDevelopment';
import web from '../../assets/images/service_logos/WebDevelopment/cover.svg';
import dataOrdered from '../../utils/OtherServices';

const WebDevelopment = () => (
  <Service
    coverImage={web}
    serviceData={WebDevelopmentData}
    pageName="Services/Web Development"
    otherServiceImages={dataOrdered.webDevelopment}
  />
);

export default WebDevelopment;
