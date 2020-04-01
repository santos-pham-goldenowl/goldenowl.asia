/* eslint-disable max-len */

// logo import
import rails from '../assets/images/service/MobileDevelopment/rails.svg'
import rubic from '../assets/images/service/MobileDevelopment/rubic.svg'
import php from '../assets/images/service/MobileDevelopment/php.svg'
import swift from '../assets/images/service/MobileDevelopment/swift.svg'
import reactNative from '../assets/images/service/MobileDevelopment/react-native.svg'
import objectC from '../assets/images/service/MobileDevelopment/objectC.svg'
import ios from '../assets/images/service/MobileDevelopment/ios.svg'
import android from '../assets/images/service/MobileDevelopment/android.svg'
import plus from '../assets/images/service/MobileDevelopment/plus.svg'
import skype from '../assets/images/service/ProjectManagement/skype.svg'
import slack from '../assets/images/service/ProjectManagement/slack.svg'
import trello from '../assets/images/service/ProjectManagement/trello.svg'
import fire from '../assets/images/service/ProjectManagement/fire.svg'
import wave from '../assets/images/service/ProjectManagement/wave.svg'
import html from '../assets/images/service/WebDevelopment/html.svg'
import css3 from '../assets/images/service/WebDevelopment/css3.svg'
import js from '../assets/images/service/WebDevelopment/js.svg'
import react from '../assets/images/service/WebDevelopment/react.svg'
import angular from '../assets/images/service/WebDevelopment/angular.svg'
import mock from '../assets/images/service/WebDevelopment/mock.svg'
import ai from '../assets/images/service/UiUx/ai.svg'
import inVision from '../assets/images/service/UiUx/in-vision.svg'
import ps from '../assets/images/service/UiUx/ps.svg'
import sketch from '../assets/images/service/UiUx/sketch.svg'
// cover import
import mobileCoverImage from '../assets/images/service/MobileDevelopment/cover.svg'
import projectCoverImage from '../assets/images/service/ProjectManagement/cover.svg'
import developmentCoverImage from '../assets/images/service/DevelopmentTeam/cover.svg'
import uiUxCoverImage from '../assets/images/service/UiUx/cover.svg'
import webCoverImage from '../assets/images/service/WebDevelopment/cover.svg'

// mobile cover import
import mMobileCoverImage from '../assets/images/service/MobileDevelopment/mCover.png'
import mProjectCoverImage from '../assets/images/service/ProjectManagement/mCover.png'
import mDevelopmentCoverImage from '../assets/images/service/DevelopmentTeam/mCover.png'
import mUiUxCoverImage from '../assets/images/service/UiUx/mCover.png'
import mWebCoverImage from '../assets/images/service/WebDevelopment/mCover.png'

// below section navigation
import pageNavs from './OtherServices'

const { webDevelopment, mobileDevelopment, uiUxDesign, projectManagement, developmentTeam } = pageNavs

const servicesDetails = {
  'Mobile development': {
    url: 'mobile-development',
    cover: mobileCoverImage,
    mobileCover: mMobileCoverImage,
    first: { content: 'A good application is not only about the unique business but also about great responsive on all kinds of mobiles and tablets. Therefore, having a developer with vast experience and good at creating UX/ UI is a must in a mobile application project.' },
    second: {
      title: 'We have a great mobile development team',
      content: 'Golden Owl, we understand the important role of mobile application in modern life so we have invented ourselves to own a team of dynamic and talented developers who love to work, innovate and develop Mobile application.',
    },
    third: {
      left: {
        title: 'Responsive',
        content: 'A perfect responsive mobile app always delivers its purposes to client and user in the most positive way.',
      },
      center: {
        title: 'Performance',
        content: 'A mobile app works smoothly with fast speed always gains the affection from users and clients.',
      },
      right: {
        title: 'Storage',
        content: 'The less storage a mobile app takes, the better it is.',
      },
    },
    fourth: {
      title: 'Seamless Integration with 50+ mobile platforms.',
      content: 'Building mobile application projects on operator system Android and iOS has become successful thanks to programming languages such as Notejs, ObjC, etc. They are all play important role in the programming procedure.',
      logos: [
        {
          name: 'rails',
          url: rails,
        },
        {
          name: 'rubic',
          url: rubic,
        },
        {
          name: 'php',
          url: php,
        },
        {
          name: 'swift',
          url: swift,
        },
        {
          name: 'react-native',
          url: reactNative,
        },
        {
          name: 'objectC',
          url: objectC,
        },
        {
          name: 'ios',
          url: ios,
        },
        {
          name: 'android',
          url: android,
        },
        {
          name: '50plus',
          url: plus,
        },
      ],
    },
    navs: mobileDevelopment,
  },
  'Project management': {
    url: 'project-management',
    cover: projectCoverImage,
    mobileCover: mProjectCoverImage,
    first: { content: 'The success of each project has the vital contribution of a project manager. Golden Owl is proud of having a professional project management team who not only always stays side-by-side to support our development team for a good result but is also a friendly partner to client.' },
    second: {
      title: 'What makes our project management success',
      content: 'Each of member in project manager team always tries her best to make the project goes as smooth as it can, finds the most suitable solutions for any arising issues and understands client’s need then deliver to development team.',
    },
    third: {
      left: {
        title: 'Responsibility',
        content: 'Our project management team knows what to do, what is need, and is aware of how important their duty is.',
      },
      center: {
        title: 'Friendliness',
        content: 'As a close friend to client as well as developer, our project manager is the one who understand both side and finds out one same language in best way to satisfy both.',
      },
      right: {
        title: 'Delivery',
        content: 'A project manager is not only the one who keeps track and controls any situations of the project but also takes responsibility to deliver message from developer to client and vice versa.',
      },
    },
    fourth: {
      title: 'Efficient management with management tool',
      content: 'The project management team here has gained so much convenience and success thanks to management tools such as Trello, Slack, etc. All members of the project management team love it and so does our client.',
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
    },
    navs: projectManagement,
  },
  'Development Team': {
    url: 'development-team',
    cover: developmentCoverImage,
    mobileCover: mDevelopmentCoverImage,
    first: { content: 'Development team is one of important elements that makes up the success of any projects. Golden Owl Consulting owns a large number of outstanding developers with large experience in building website as well as application. No matter how complicated client’s idea is, we always try our best to make the best production. We always find the best way to make the work more efficient.' },
    second: {
      title: 'Try our best for client’s satisfaction',
      content: 'The process of creating a website or an application may very complex and need the involvement of many developers, but we always find out the best solution to give to client. We make an effort to aim to achieve their satisfaction.',
    },
    third: {
      left: {
        title: 'Responsibility',
        content: 'Being in time for deadline and ensuring the quality of final production are our priority when working with client.',
      },
      center: {
        title: 'Team work',
        content: 'Corporation makes the project more facilitate, helps people understand each other and brings team members together.',
      },
      right: {
        title: 'Great experience',
        content: 'Developers with great experience in their field increases the success and client’s satisfaction of the project.',
      },
    },
    fourth: {
      title: 'We are stronger together',
      content: 'Each member of the development team has their own strength and ability, they may still not good at some points and that’s why they always try our best to work together and support each other for the common achievement. Working together makes us stronger and growing faster.',
      logos: [],
    },
    navs: developmentTeam,
  },
  'UX UI design': {
    url: 'ux-ui-design',
    cover: uiUxCoverImage,
    mobileCover: mUiUxCoverImage,
    first: { content: 'A good user experience is the best glue between a brand and (potential) customers. We ensure a consistent brand experience in all interactions with the user, from the look & feel of the various platforms, to the content and the communication between brand and customer.' },
    second: {
      title: 'We offer a design services',
      content: 'All our team members here at shape understand web design and application design. We can create UX UI design services in specific areas to help your business. Creating unique visuals to make you and your brand stand out from the crowd, and more importantly - your competitors.',

    },
    third: {
      left: {
        title: 'Ideation',
        content: 'We design, make prototypes and test design concepts to ensure that users achieve their goals smoothly.',
      },
      center: {
        title: 'Usability research',
        content: 'Through usability research we learn how visitors experience the platform and we make recommendations for optimisation.',
      },
      right: {
        title: 'Interaction design',
        content: 'We design interactions between users and products. The most important thing is that the user archieves his goal as simply as possible, something we test on the basis of detailed prototypes.',
      },
    },
    fourth: {
      title: 'Seamless Integration with popular design tools.',
      content: 'Design tool plays a very importance role in creating design process. Thanks to tools such as Invision and Adobe Photoshop as well as other ones, amazing designs are produced and published and makes the project’s UI looks so nice and attractive.',
      logos: [
        {
          name: 'sketch',
          url: sketch,
        },
        {
          name: 'ps',
          url: ps,
        },
        {
          name: 'ai',
          url: ai,
        },
        {
          name: 'inVision',
          url: inVision,
        },
      ],
    },
    navs: uiUxDesign,
  },
  'Web development': {
    url: 'web-development',
    cover: webCoverImage,
    mobileCover: mWebCoverImage,
    first: { content: 'We - Golden Owl is a professional company with great experience in web development from small to big web project in many from many fields such as business, finance, management, etc.' },
    second: {
      title: 'What can we bring',
      content: 'As a professional company, we are able to work on many programming languages for web development. We always update the latest technologies so that we can serve the customer the best solutions.',

    },
    third: {
      left: {
        title: 'Quality',
        content: 'We have young and active people who are led and instructed by senior developers. Also, we understand technologies so we know how to produce the good and clean code.',
      },
      center: {
        title: 'Productivity',
        content: 'Beside owning an expert and experienced developer team, we also have good project managers who have good background in management. We know how to control the time and tasks to make it delivery in time.',
      },
      right: {
        title: 'Security',
        content: 'Beside the quality of the code, security is set as importance as well. With experience in deploying many websites, we know how to make your web site is protected from being attacked by bad guys.',
      },
    },
    fourth: {
      title: 'Seamless Integration with 50+ software platforms.',
      content: 'Our projects are build in many programming languages like Javascript, Ruby on Rails, etc. Due to those magical tools, we are able to create so many amazing projects. We know which one is more suitable for your project and make it better than ever.',
      logos: [
        {
          name: 'html',
          url: html,
        },
        {
          name: 'css3',
          url: css3,
        },
        {
          name: 'js',
          url: js,
        },
        {
          name: 'react',
          url: react,
        },
        {
          name: 'angular',
          url: angular,
        },
        {
          name: 'mock',
          url: mock,
        },
        {
          name: '50plus',
          url: plus,
        },
      ],
    },
    navs: webDevelopment,
  },
}

export default servicesDetails
