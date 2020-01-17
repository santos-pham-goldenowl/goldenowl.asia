import React from 'react';
import Service from '../../components/Service/index';
import MobileDevelopmentData from '../../utils/MobileDevelopment';
import dataOrdered from '../../utils/OtherServices';

const MobileDevelopment = () => (
  <Service
    serviceData={MobileDevelopmentData}
    pageName="Mobile Development"
    otherServiceImages={dataOrdered.mobileDevelopment}
  />
);

export default MobileDevelopment;
