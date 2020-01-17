import React from 'react';
import Service from '../../components/Service/index';
import ProjectManagementData from '../../utils/ProjectManagement';
import dataOrdered from '../../utils/OtherServices';

const ProjectManagementService = () => (
  <Service
    serviceData={ProjectManagementData}
    pageName="Project Management"
    otherServiceImages={dataOrdered.projectManagement}
  />
);

export default ProjectManagementService;
