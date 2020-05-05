import mobileSmall from '../assets/images/service/OtherServices/mobile-small.svg';
import uiUXSmall from '../assets/images/service/OtherServices/ui-ux-small.svg';
import projectMana from '../assets/images/service/OtherServices/project-mana.svg';
import developmentTeam from '../assets/images/service/OtherServices/development-team-small.svg';
import webSmall from '../assets/images/service/OtherServices/web-small.svg';
import testSmall from '../assets/images/service/OtherServices/test-small.svg';
import consultSmall from '../assets/images/service/OtherServices/consult-small.svg';

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
const testNav = {
  title: 'Automation testing',
  imgUrl: testSmall,
  url: 'automation-testing',
};
const consultNav = {
  title: 'IT solutions consulting',
  imgUrl: consultSmall,
  url: 'it-solutions-consulting',
};


const pageNavs = {
  webDevelopment: {
    mobileNav,
    uiUxNav,
    projectNav,
    developNav,
    testNav,
    consultNav,
  },
  mobileDevelopment: {
    webNav,
    uiUxNav,
    projectNav,
    developNav,
    testNav,
    consultNav,
  },
  projectManagement: {
    webNav,
    mobileNav,
    uiUxNav,
    developNav,
    testNav,
    consultNav,
  },
  developmentTeam: {
    webNav,
    mobileNav,
    uiUxNav,
    projectNav,
    testNav,
    consultNav,
  },
  uiUxDesign: {
    webNav,
    mobileNav,
    projectNav,
    developNav,
    testNav,
    consultNav,
  },
  automationTesting: {
    webNav,
    mobileNav,
    projectNav,
    developNav,
    uiUxNav,
    consultNav,
  },
  itSolutionsConsulting: {
    webNav,
    mobileNav,
    projectNav,
    developNav,
    uiUxNav,
    testNav,
  }
};

export default pageNavs;
