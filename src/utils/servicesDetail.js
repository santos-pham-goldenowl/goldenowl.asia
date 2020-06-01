/* eslint-disable  max-len */
import React from 'react'

import service1 from '../assets/images/service/illustration-01.png';
import service2 from '../assets/images/service/illustration-02.png';
import service3 from '../assets/images/service/illustration-03.png';
import service4 from '../assets/images/service/illustration-04.png';
import service5 from '../assets/images/service/illustration-05.png';
import service6 from '../assets/images/service/illustration-06.png';
import service7 from '../assets/images/service/illustration-07.png';

export const ServicesDetailContent = {
  'Web Development': {
    url: service1,
    content: <p>Our certified development experts use only trusted technologies for delivering backend, FE, cloud, AI and other software solutions.</p>,
    link: 'web-development',
  },
  'Mobile Development': {
    url: service2,
    content: <p>It doesn’t matter what type of mobile software you need; our developers are ready to build native, hybrid, and <span className="d-inline-block">cross-platform</span> applications.</p>,
    link: 'mobile-development',
  },
  'UX/UI design': {
    url: service3,
    content: <p>Software products must be unique, <span className="d-inline-block">eye-pleasing</span> and <span className="d-inline-block">user-friendly.</span> Our UI/ UX designers create brand identity concepts, prototypes, great interfaces, and more.</p>,
    link: 'ux-ui-design',
  },
  'Project management': {
    url: service4,
    content: <p>We help managing the plan, organization, and accountability to achieve information technology goals.</p>,
    link: 'project-management',
  },
  'Development team': {
    url: service5,
    content: <p>We own more than 50 professional developers who help build <span className="d-inline-block">full-stack</span> solutions for clients in several platforms.</p>,
    link: 'development-team',
  },
  'Automation testing': {
    url: service7,
    content: <p>Our engineers validate both created functionalities and non-functional requirements (performance, usability, security testing, etc.), so the developers immediately know what needs to be fixed, rewritten or improved.</p>,
    link: 'automation-testing',
  },
  'IT solutions consulting': {
    url: service6,
    content: <p>Our consultants are enthousiast in helping businesses to scale up rapidly, significantly improve the system’s speed and become much more agile in responding to market needs. Just ask us!</p>,
    link: 'it-solutions-consulting',
  },
};

export const ServicesDetailParagraphs = {
  'From a basic idea to the masterpiece of work': {
    content: 'We not only shape your idea into a immaculate product but also make it beyond your expectation. Our product will always meet your demand and never let you down.',
  },
  'Not only about quality but about design as well': {
    content: 'Besides paying attention to the quality and stability of the project, we also cherish the importance of design because the success of project is not only about how smooth it works, how unique the business is, it also about how elegant it looks. We always try our best to bring you the most modern and attractive design to the product.',
  },
};
