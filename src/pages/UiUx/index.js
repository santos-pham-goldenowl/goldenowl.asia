import React from 'react';
import Service from '../../components/Service/index';
import UiUxData from '../../utils/UiuxService';
import dataOrdered from '../../utils/OtherServices';
import './index.sass';

const UiUxService = () => (
  <div className="ux-ui-design-container">
    <Service
      serviceData={UiUxData}
      pageName="UX UI design"
      otherServiceImages={dataOrdered.uiUxDesign}
    />
  </div>
);

export default UiUxService;
