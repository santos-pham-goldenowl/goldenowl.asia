import React from 'react';
import Service from '../../components/Service/index';
import ProjectManagementData from '../../utils/ProjectManagement';
import dataOrdered from '../../utils/OtherServices';
import './index.sass';

const ProjectManagementService = () => (
  <div className="project-management-container">
    <Service
      serviceData={ProjectManagementData}
      pageName="Project Management"
      otherServiceImages={dataOrdered.projectManagement}
    />
  </div>
);

export default ProjectManagementService;
