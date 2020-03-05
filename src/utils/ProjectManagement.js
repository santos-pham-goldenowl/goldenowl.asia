import skype from '../assets/images/service/ProjectManagement/skype.svg';
import slack from '../assets/images/service/ProjectManagement/slack.svg';
import trello from '../assets/images/service/ProjectManagement/trello.svg';
import fire from '../assets/images/service/ProjectManagement/fire.svg';
import wave from '../assets/images/service/ProjectManagement/wave.svg';
import coverImage from '../assets/images/service/ProjectManagement/cover.svg';

const ProjectManagementData = {
  coverImage,
  pageTitle: 'Project management',
  subTitle: 'What makes our project management success',
  intro: 'The success of each project has the vital contribution of a project manager. Golden Owl is proud of having a professional project management team who not only always stays side-by-side to support our development team for a good result but is also a friendly partner to client.',
  subIntro: 'Each of member in project manager team always tries her best to make the project goes as smooth as it can, finds the most suitable solutions for any arising issues and understands client’s need then deliver to development team.',
  slogan: {
    title: 'Simple and powerful',
    leftContent: {
      title: 'Responsibility',
      content: 'Our project management team knows what to do, what is need, and is aware of how important their duty is.',
    },
    centerContent: {
      title: 'Friendliness',
      content: 'As a close friend to client as well as developer, our project manager is the one who understand both side and finds out one same language in best way to satisfy both.',
    },
    rightContent: {
      title: 'Delivery',
      content: 'A project manager is not only the one who keeps track and controls any situations of the project but also takes responsibility to deliver message from developer to client and vice versa.',
    },
  },
  achieves: {
    title: 'Efficient management with management tool',
    description: 'The project management team here has gained so much convenience and success thanks to management tools such as Trello, Slack, etc.',
  },
  logos: [
    {
      name: 'slack',
      url: slack,
    },
    {
      name: 'trello',
      url: trello,
    },
    {
      name: 'fire',
      url: fire,
    },
    {
      name: 'wave',
      url: wave,
    },
    {
      name: 'skype',
      url: skype,
    },
  ],
};

export default ProjectManagementData;
