import React from 'react';
import Service from '../../components/Service/index';
import WebDevelopmentData from '../../utils/WebDevelopment';
import dataOrdered from '../../utils/OtherServices';
import './index.sass';

const WebDevelopment = () => (
  <div className="web-development-container">
    <Service
      serviceData={WebDevelopmentData}
      pageName="Web Development"
      otherServiceImages={dataOrdered.webDevelopment}
    />
  </div>
);

export default WebDevelopment;
