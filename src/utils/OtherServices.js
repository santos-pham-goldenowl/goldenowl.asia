import mobileSmall from '../assets/images/service_logos/OtherServices/mobile-small.svg';
import uiUXSmall from '../assets/images/service_logos/OtherServices/ui-ux-small.svg';
import projectMana from '../assets/images/service_logos/OtherServices/project-mana.svg';
import developmentTeam from '../assets/images/service_logos/OtherServices/development-team-small.svg';
import webSmall from '../assets/images/service_logos/OtherServices/web-small.svg';

const data = [
  {
    title: 'Mobile development',
    url: mobileSmall,
  },
  {
    title: 'UX UI design',
    url: uiUXSmall,
  },
  {
    title: 'Project management',
    url: projectMana,
  },
  {
    title: 'Development team',
    url: developmentTeam,
  },
  {
    title: 'Website development',
    url: webSmall,
  },
];

const dataOrdered = {
  webDevelopment: [data[0], data[1], data[2], data[3]],
  mobileDevelopment: [data[4], data[1], data[2], data[3]],
  projectManagement: [data[4], data[0], data[1], data[3]],
  developmentTeam: [data[4], data[0], data[1], data[2]],
  uiUxDesign: [data[4], data[0], data[2], data[3]],
};

export default dataOrdered;
