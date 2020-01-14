import React from 'react';
import Service from '../../components/Service/index';
import UiUxData from '../../utils/UiuxService';
import coverImage from '../../assets/images/service_logos/UiUx/cover.svg';
import dataOrdered from '../../utils/OtherServices';

const UiUxService = () => (
  <Service
    coverImage={coverImage}
    serviceData={UiUxData}
    pageName="UX UI design"
    otherServiceImages={dataOrdered.uiUxDesign}
  />
);

export default UiUxService;
