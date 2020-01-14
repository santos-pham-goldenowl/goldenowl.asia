import React from 'react';
import Service from '../../components/Service/index';
import ProjectManagementData from '../../utils/ProjectManagement';
import coverImage from '../../assets/images/service_logos/ProjectManagement/cover.svg';
import dataOrdered from '../../utils/OtherServices';

const ProjectManagementService = () => (
  <Service
    coverImage={coverImage}
    serviceData={ProjectManagementData}
    pageName="Project Management"
    otherServiceImages={dataOrdered.projectManagement}
  />
);

export default ProjectManagementService;
