import GuestRoutes from './pages/guest';
// import SplashScreen from './pages/splash';
// import AuthRoutes from './pages/auth';

// icon imports
import Icon192 from "./resources/img/icon-192x192.png";
import Icon512 from "./resources/img/icon-512x512.png";


export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    routeHandler.setPwaSchema({
      name: "ajolo.dev",
      short_name: "ajolo.dev",

      // language: Default en-US #optional
      lang: "en-US",
      icons: [
        {
          "src": Icon192,
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": Icon512,
          "type": "image/png",
          "sizes": "512x512"
        }
      ]
    });

    routeHandler.setDefaultSeoSchema({
      title: 'Alex J. Lopez',
    });

    const routes = [
      ...GuestRoutes
      // ...SplashScreen
      // ...AuthRoutes
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
