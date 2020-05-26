/* eslint-disable max-len */

// logo import
import rails from '../assets/images/service/MobileDevelopment/rails.svg';
import rubic from '../assets/images/service/MobileDevelopment/rubic.svg';
import php from '../assets/images/service/MobileDevelopment/php.svg';
import swift from '../assets/images/service/MobileDevelopment/swift.svg';
import reactNative from '../assets/images/service/MobileDevelopment/react-native.svg';
import objectC from '../assets/images/service/MobileDevelopment/objectC.svg';
import ios from '../assets/images/service/MobileDevelopment/ios.svg';
import android from '../assets/images/service/MobileDevelopment/android.svg';
import plus from '../assets/images/service/MobileDevelopment/plus.svg';
import skype from '../assets/images/service/ProjectManagement/skype.svg';
import slack from '../assets/images/service/ProjectManagement/slack.svg';
import trello from '../assets/images/service/ProjectManagement/trello.svg';
import fire from '../assets/images/service/ProjectManagement/fire.svg';
import wave from '../assets/images/service/ProjectManagement/wave.svg';
import html from '../assets/images/service/WebDevelopment/html.svg';
import css3 from '../assets/images/service/WebDevelopment/css3.svg';
import js from '../assets/images/service/WebDevelopment/js.svg';
import react from '../assets/images/service/WebDevelopment/react.svg';
import angular from '../assets/images/service/WebDevelopment/angular.svg';
import mock from '../assets/images/service/WebDevelopment/mock.svg';
import ai from '../assets/images/service/UiUx/ai.svg';
import inVision from '../assets/images/service/UiUx/in-vision.svg';
import ps from '../assets/images/service/UiUx/ps.svg';
import sketch from '../assets/images/service/UiUx/sketch.svg';
import seWeb from '../assets/images/service/AutomationTesting/seWeb.svg';
import seIde from '../assets/images/service/AutomationTesting/seIde.svg';
import appium from '../assets/images/service/AutomationTesting/appium.svg';

// cover import
import mobileCoverImage from '../assets/images/service/MobileDevelopment/cover.jpg';
import projectCoverImage from '../assets/images/service/ProjectManagement/cover.jpg';
import developmentCoverImage from '../assets/images/service/DevelopmentTeam/cover.jpg';
import uiUxCoverImage from '../assets/images/service/UiUx/cover.jpg';
import webCoverImage from '../assets/images/service/WebDevelopment/cover.jpg';
import testCoverImage from '../assets/images/service/AutomationTesting/cover.jpg';
import consultCoverImage from '../assets/images/service/ITSolutionsConsulting/cover.jpg';

// mobile cover import
import mMobileCoverImage from '../assets/images/service/MobileDevelopment/mCover.png';
import mProjectCoverImage from '../assets/images/service/ProjectManagement/mCover.png';
import mDevelopmentCoverImage from '../assets/images/service/DevelopmentTeam/mCover.png';
import mUiUxCoverImage from '../assets/images/service/UiUx/mCover.png';
import mWebCoverImage from '../assets/images/service/WebDevelopment/mCover.png';
import mTestCoverImage from '../assets/images/service/AutomationTesting/mCover.png';
import mConsultCoverImage from '../assets/images/service/ITSolutionsConsulting/mCover.png';

// below section navigation
import pageNavs from './otherServices';

const {
  webDevelopment,
  mobileDevelopment,
  uiUxDesign,
  projectManagement,
  developmentTeam,
  automationTesting,
  itSolutionsConsulting,
} = pageNavs;

const servicesDetails = {
  'Mobile development': {
    url: 'mobile-development',
    cover: mobileCoverImage,
    mobileCover: mMobileCoverImage,
    first: {
      content: 'With about 90% of time on mobile spent in applications, investing in a mobile app for your business may help to attract customers and to get your brand in front of more people. Golden Owl have developed mobile applications in various industries: from Real Estate, Ecommerce, Social Platforms, to Financial Services or Education.',
    },
    second: {
      title: 'What to expect',
      content: 'We use the best tools used to create native mobile apps for iOS and Android, even when you decide to use the best hybrid mobile app framework. UX/UI designers also onboard, making sure that your mobile app’s interface is both beautiful and intuitive.',
    },
    third: {
      title: 'At Goldwen Owl, we can deliver more…',
      left: {
        title: 'High performance',
        content: 'Responsive applications can be complex when you’re writing large, component-based application platforms, and we’re expert at managing and controlling that complexity while maximizing the capabilities of the mobile devices, turning a mobile product into a real business.',
      },
      center: {
        title: 'Measurable value',
        content: 'Agility is the name of the game. Our scrum-based Agile development methodology ensures frequent builds and gives you plenty of time to test and adjust. Our process ensures we build products that create measurable value on time and on budget.',
      },
      right: {
        title: 'Full package',
        content: 'We provide consulting, UI/UX design and product development services for every stage of your mobile project. ',
      },
    },
    fourth: {
      title: 'Seamless Integration with 50+ mobile platforms.',
      content: 'Building mobile application projects on operator system Android and iOS has become successful thanks to programming languages such as Notejs, ObjC, etc. They all play important role in the programming procedure.',
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
    first: {
      highlight: 'To make you feel like we work as your in-house team.',
      content: `No matter what, you can't create an amazing software product without the collaboration between the business side and technical side.`,
    },
    second: {
      title: 'With our project managers, you can sleep well – you are in good hands.',
      content: 'At Golden Owl, we are proud of our project manager team -  key people who contributed to each and every project’s success. It’s them who make our approach work perfectly when it comes to remote collaboration.',
    },
    third: {
      title: 'Simple and powerful',
      left: {
        title: 'Client-oriented',
        content: 'Project managers work with our clients to understand their goals around delivery, growth, and revenue, and in partnership we define the product strategy that will meet their needs and achieve their goals. They make sure project needs are met by always bringing the right people to the team.',
      },
      center: {
        title: 'High-quality team',
        content: 'Our project managers are encouraged to constantly improve their project management skills, not only the technology but also soft skills, management and team collaboration. They play the role of communicator, a problem-solver, a team supporter and a consultant at the same time.',
      },
      right: {
        title: 'Always in touch',
        content: 'Our project managers show a high sense of responsibility and responsiveness during the project. Dealing with international clients is no problem for us – everybody speaks English and further improves their language skills.',
      },
    },
    fourth: {
      title: 'Efficient management with management tool.',
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
    first: {
      highlight: 'Our work is about impactful products.',
      content: `Building software is a complex process. That’s why you shouldn't try to tackle it alone.`,
    },
    second: {
      title: 'We value professionals and teamwork to boost efficiency and productivity',
      content: 'Each developer in our team has their own strengths and expertise but they have things in common: clean code, product-first mindset, great communication skills. We share the same vision: build software that boosts productivity for businesses and simplifies user’s lives.',
    },
    third: {
      title: 'Simple and powerful',
      left: {
        title: 'Technology experts',
        content: 'We’re proud of our full-stack technology. Our reliable team of software engineers delivers cutting-edge software solutions on top of .NET, Ruby, Java, React, employing high-level development practices of cloud automation, blockchain, and artificial intelligence.',
      },
      right: {
        title: 'Disciplined team',
        content: 'We work in a team and we live by these principles: ship code on time, don’t compromise quality, and bring passion to our work.',
      },
      center: {
        title: 'Enhance team spirit',
        content: `Before joining a commercial project, all developers must undergo internal training to learn work procedures and processes.\n Our standpoint is that when you’re good at something, you have a responsibility to share the know-how with others. Knowledge and support are shared across the team so that people can learn, develop and get promoted faster.`,
      },
    },
    fourth: {
      title: 'We are stronger together.',
      content: 'Each member of the development team has their own strength and ability, they may still not good at some points and that’s why they always try our best to work together and support each other for the common achievement. Working together makes us stronger and growing faster.',
      logos: [],
    },
    navs: developmentTeam,
  },
  'UX UI design': {
    url: 'ux-ui-design',
    cover: uiUxCoverImage,
    mobileCover: mUiUxCoverImage,
    first: {
      content: 'At Golden Owl, we believe that love at first sight is possible. When it comes to user experience, you can definitely count on us for product design service. Our team of professional designers and UI experts work closely with our clients to design and develop applications that are intuitive, engaging & aesthetically appealing.',
    },
    second: {
      title: 'What you get',
      content: 'We ensure a consistent brand experience in all interactions with the user, from the look & feel of the various platforms, to the content and the communication between brand and customer.',
    },
    third: {
      title: "How we do that: Step by step",
      left: {
        title: 'UX Design & Testing',
        content: 'We design, make prototypes and test design concepts to ensure that users achieve their goals smoothly.',
      },
      center: {
        title: 'Visual Design',
        content: 'Defining the look and feel. Visual layout design, creating animations & designing icon and image sets in accordance with brand and style guidelines. The goal is to create a polished and elegant product that users will love.',
      },
      right: {
        title: 'Build & Test',
        content: 'Creating unique visuals to make you and your brand stand out from the crowd, and more importantly - your competitors.',
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
    first: {
      content: 'With dozens of successful website development projects, we are confident to help you identify your challenges, to give you a clear and rational tangible solution that fits your needs. Our reliable team of software engineers delivers cutting-edge software solutions on top of .NET, Ruby, Java, React, employing high-level development practices of cloud automation, blockchain, and artificial intelligence.',
    },
    second: {
      title: 'What to expect',
      content: `We not only deliver great quality, but we strive to deliver it in the timescales that align with your expectations. It is as important to us as it is to you that website is delivered properly, on time and on budget.`,

    },
    third: {
      title: 'At Goldwen Owl, we can deliver more…',
      left: {
        title: 'The right fit',
        content: 'Our developers are proficient in many programming languages. We always update the latest web technology and we don’t play favorites with platforms or tools. You can rest assured the code behind your website is exactly the right fit, clean and easy to maintain.',
      },
      center: {
        title: 'Clear communication',
        content: `Why are our clients so pleased working with our team? We believe it’s because of our interaction and communication style. Language boundaries don't exist in our dictionary. Our project managers don’t speak tech to clients, we speak your language and we live our core values by keeping it clear, simple but effective.`,
      },
      right: {
        title: 'Long term relationships',
        content: 'We are not that type of company that builds your website and walks away. We ensure your website is not only high-performing but also easy to maintain and extend in the future. Security is also on our top priorities, we know techniques to protect your website against hackers and attacks.',
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
  'Automation testing': {
    url: 'automation-testing',
    cover: testCoverImage,
    mobileCover: mTestCoverImage,
    first: {
      highlight: 'Because untested software is expensive.',
      content: 'You don’t want to suffer reputation losses because of angry comments from unhappy clients, nor waste time on endless technical fixes, do you?',
    },
    second: {
      title: 'Software testing is at the core of quality assurance',
      content: `At Golden Owl, we take product testing solutions very seriously. Our engineers have two main tasks: ensuring the highest quality of an application and thorough software testing so it doesn’t contain any elements discouraging future users from using it.`,
    },
    third: {
      title: 'How we do that',
      left: {
        title: 'Custom automation testing frameworks',
        content: 'Develop automated test with every major language, framework, tools extensive list of testing devices.',
      },
      center: {
        title: 'From the first builds to the product release',
        content: `Our team makes sure that bugs are discovered, errors are spotted and the entire product works as planned.`,
      },
      right: {
        title: 'Ongoing Assistance',
        content: `We support crash analytics, bug debugging and error correction.`,
      },
    },
    fourth: {
      title: 'Best practices with appropriate tools.',
      content: 'We apply the best practices, picks appropriate tools, and supervises automated testing. The whole work is based on the list of strict quality checks that the solution must pass in order to move to the next phase and make sure that both developers and clients understand the importance of the QA process.',
      logos: [
        {
          name: 'selenium web',
          url: seWeb,
        },
        {
          name: 'selenium ide',
          url: seIde,
        },
        {
          name: 'appium',
          url: appium,
        },
      ],
    },
    navs: automationTesting,
  },
  'IT Solutions Consulting': {
    url: 'it-solutions-consulting',
    cover: consultCoverImage,
    mobileCover: mConsultCoverImage,
    first: {
      highlight: 'We believe that the future is digital.',
      content: 'Our goal is to help businesses obtain competitive advantages through the adoption of digital transformation by providing engineering and consulting services that foster competitiveness and innovation.',
    },
    second: {
      title: 'Emerge modern technologies with unique solutions',
      content: `Golden Owl offers a blend of technology knowledge, data mining and analytical tools to help you create and transform applications, processes and operations in line with your unique possibilities.`,
    },
    third: {
      title: 'Our solutions',
      left: {
        title: 'Software consulting',
        content: 'Help you focus on what you really need and align technology, operational and financial objectives.',
      },
      center: {
        title: 'IT solutions consulting',
        content: `We are here for every of your business stages whether you are going to start, to scale or to be disruptive.`,
      },
      right: {
        title: 'Take of your problems',
        content: `Enterprise management. Data management & analytics. Ecommerce. Customer loyalty management.`,
      },
    },
    fourth: {
      title: 'Speed up your business transformation.',
      content: 'We’d love to assist you through the challenge of finding the right direction for your software development strategy. Partner with us, you can get an actionable plan for improving your current IT solutions for better scalability, performance and cost optimisation.',
      logos: [],
    },
    navs: itSolutionsConsulting,
  },
};

export default servicesDetails;
