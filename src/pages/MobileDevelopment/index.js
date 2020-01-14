import React from 'react';
import Service from '../../components/Service/index';
import MobileDevelopmentData from '../../utils/MobileDevelopment';
import coverImage from '../../assets/images/service_logos/MobileDevelopment/cover.svg';
import dataOrdered from '../../utils/OtherServices';

const MobileDevelopment = () => (
  <Service
    coverImage={coverImage}
    serviceData={MobileDevelopmentData}
    pageName="Mobile Development"
    otherServiceImages={dataOrdered.mobileDevelopment}
  />
);

export default MobileDevelopment;
