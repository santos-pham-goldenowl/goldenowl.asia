import React from 'react';
import Service from '../../components/Service/index';
import MobileDevelopmentData from '../../utils/MobileDevelopment';
import dataOrdered from '../../utils/OtherServices';
import './index.sass';

const MobileDevelopment = () => (
  <div className="mobile-development-container">
    <Service
      serviceData={MobileDevelopmentData}
      pageName="Mobile Development"
      otherServiceImages={dataOrdered.mobileDevelopment}
    />
  </div>
);

export default MobileDevelopment;
