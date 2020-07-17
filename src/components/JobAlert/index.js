import React, { useState } from 'react';

import JobAlertDialog from '../JobAlertDialog';

import bell from '../../assets/images/alertbell.svg';
import './index.sass';

const JobAlert = () => {
  const [dialogStatus, setDialogStatus] = useState(false);

  const openDialog = () => setDialogStatus(true);

  const closeDialog = () => setDialogStatus(false);

  return (
    <>
      <button type="button" id="fixed-right-button" className="d-flex job-alert-button" onClick={openDialog}>
        <img src={bell} className="job-alert-icon" alt="GO-alert" />
        Job alert
      </button>
      <JobAlertDialog show={dialogStatus} onHide={closeDialog} />
    </>
  );
};

export default JobAlert;
