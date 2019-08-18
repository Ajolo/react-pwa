export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'Alex J. Lopez',
      description: 'Porfolio PWA site built in Reactjs!',
    },
  },
];
