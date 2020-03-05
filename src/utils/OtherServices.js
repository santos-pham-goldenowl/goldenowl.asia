import mobileSmall from '../assets/images/service/OtherServices/mobile-small.svg';
import uiUXSmall from '../assets/images/service/OtherServices/ui-ux-small.svg';
import projectMana from '../assets/images/service/OtherServices/project-mana.svg';
import developmentTeam from '../assets/images/service/OtherServices/development-team-small.svg';
import webSmall from '../assets/images/service/OtherServices/web-small.svg';

const mobileNav = {
  title: 'Mobile development',
  imgUrl: mobileSmall,
  url: 'mobile-development',
};
const uiUxNav = {
  title: 'UX UI design',
  imgUrl: uiUXSmall,
  url: 'ux-ui-design',
};
const projectNav = {
  title: 'Project management',
  imgUrl: projectMana,
  url: 'project-management',
};
const developNav = {

  title: 'Development team',
  imgUrl: developmentTeam,
  url: 'development-team',
};
const webNav = {
  title: 'Website development',
  imgUrl: webSmall,
  url: 'web-development',
};

const pageNavs = {
  webDevelopment: { mobileNav, uiUxNav, projectNav, developNav },
  mobileDevelopment: { webNav, uiUxNav, projectNav, developNav },
  projectManagement: { webNav, mobileNav, uiUxNav, developNav },
  developmentTeam: { webNav, mobileNav, uiUxNav, projectNav },
  uiUxDesign: { webNav, mobileNav, projectNav, developNav },
};

export default pageNavs;
