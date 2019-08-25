import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';

/*
  SIDEBAR MENU
*/
export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/about'),
    seo: {
      title:  'About',
      description: 'Home page overview of qualifications and education',
    },
  },
  {
    path: '/contact',
    exact: true,
    component: () => import('../components/contact'),
    seo: {
      title:  'Contact',
      description: 'Get in touch with me!',
    },
  },
  {
    path: '/projects',
    exact: true,
    component: () => import('../components/projects'),
    seo: {
      title:  'Projects',
      description: 'What I\'ve been working on!',
    },

  },
];
