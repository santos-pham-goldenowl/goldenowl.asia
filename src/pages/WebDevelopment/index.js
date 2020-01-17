import React from 'react';
import Service from '../../components/Service/index';
import WebDevelopmentData from '../../utils/WebDevelopment';
import dataOrdered from '../../utils/OtherServices';

const WebDevelopment = () => (
  <Service
    serviceData={WebDevelopmentData}
    pageName="Web Development"
    otherServiceImages={dataOrdered.webDevelopment}
  />
);

export default WebDevelopment;
