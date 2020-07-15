import React from 'react';
import LoadingScreen from '../LoadingScreen';

import { LOADED_STATUS, NO_RESULT_STATUS } from '../../constant';

const LoadDataComponent = ({ loadStatus, component }) => {
  switch (loadStatus) {
    case LOADED_STATUS:
      return component;
    case NO_RESULT_STATUS:
      return (
        <center>
          <h3 className="no-data-text">No data to display...</h3>
        </center>
      );
    default:
      return <LoadingScreen />;
  }
};

export default LoadDataComponent;
