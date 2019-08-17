import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';

/*
  SIDEBAR MENU
*/
export default [
  {
    path: '/about',
    exact: true,
    component: () => import('../components/about'),
    seo: {
      title:  'About',
      description: 'Overview of qualifications and education',
    },
  },
  {
    path: '/contact',
    exact: true,
    component: () => import('../components/contact'),
    seo: {
      title:  'Contact',
      description: 'Overview of qualifications and education',
    },
  },
  {
    path: '/projects',
    exact: true,
    component: () => import('../components/projects'),
    seo: {
      title:  'Projects',
      description: 'Overview of qualifications and education',
    },
  },
  {
    path: '/global-local-css',
    exact: true,
    component: () => import('../components/global-local-css'),
    seo: {
      title: 'CSS',
      description: 'Sometimes we use global css classes like pad-10 but sometimes we need to write class names within modules that do not conflict with other modules, that is where local css comes into the picture',
    },
  },
  {
    path: '/typescript-counter',
    exact: true,
    component: () => import('../components/typescript-counter'),
    seo: {
      title: 'TypeScript Counter',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
    },
  },
  {
    path: '/skeleton-loading',
    exact: true,
    loadData: async () => new Promise((r) => {
      setTimeout(() => {
        fetch('https://www.atyantik.com/wp-json/wp/v2/posts/?per_page=4&_fields[]=title&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
          .then(res => res.json())
          .then(res => r(res));
      }, 1000);
    }),
    component: () => import('../components/skeleton-loading'),
    skeleton,
    seo: {
      title: 'Skeleton Loading',
      description: 'Tired of adding ugly loaders? Do not let your users get confused, give them the best user experience of what is getting loaded. Use Skeleton Loading',
    },
  },
  {
    path: '/image-optimization',
    exact: true,
    component: () => import('../components/image-optmization'),
    seo: {
      title: 'Image Optimization',
      description: 'Serve optimize images automatically with Lazy loading and WebP support with fallback to JPG/PNG of original image.',
    },
  },
  {
    path: '/contribute',
    exact: true,
    component: () => import('../components/contribute'),
    seo: {
      title: 'Contribute',
      description: 'Be a part of larger family. Get involved with us and support our project ReactPWA',
    },
  },
];
