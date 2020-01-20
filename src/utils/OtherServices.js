import mobileSmall from '../assets/images/service/OtherServices/mobile-small.svg';
import uiUXSmall from '../assets/images/service/OtherServices/ui-ux-small.svg';
import projectMana from '../assets/images/service/OtherServices/project-mana.svg';
import developmentTeam from '../assets/images/service/OtherServices/development-team-small.svg';
import webSmall from '../assets/images/service/OtherServices/web-small.svg';

const data = [
  {
    title: 'Mobile development',
    url: mobileSmall,
    link: 'mobile-development'
  },
  {
    title: 'UX UI design',
    url: uiUXSmall,
    link: 'ux-ui-design'
  },
  {
    title: 'Project management',
    url: projectMana,
    link: 'project-management'
  },
  {
    title: 'Development team',
    url: developmentTeam,
    link: 'development-team'
  },
  {
    title: 'Website development',
    url: webSmall,
    link: 'web-development'
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
