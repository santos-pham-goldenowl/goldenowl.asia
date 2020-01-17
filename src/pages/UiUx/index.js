import React from 'react';
import Service from '../../components/Service/index';
import UiUxData from '../../utils/UiuxService';
import dataOrdered from '../../utils/OtherServices';

const UiUxService = () => (
  <Service
    serviceData={UiUxData}
    pageName="UX UI design"
    otherServiceImages={dataOrdered.uiUxDesign}
  />
);

export default UiUxService;
