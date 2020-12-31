
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';


import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

//develop
import LoginPage from '../pages/auth/login.vue';
import RegisterPage from '../pages/auth/register.vue';

import firebase from "../../config/firebase.js";
import store from "../store/index.js";


console.log(store.state.user.user.loggedIn)
function checkAuth(to, from, resolve, reject) {
  if (store.state.user.user.loggedIn) {
    resolve('/');
  } else {
    reject('/login/');
  }
}
function checkPermission(to, from, resolve, reject) {
  // if (/* some condition to check user edit permission */) {
  //   resolve();
  // } else {
  //   reject();
  // }
}

var routes = [
  {
    path: '/',
    name : 'Home',
    component: HomePage,
    beforeEnter: [checkAuth, checkPermission],
  },
  {
    path: '/about/',
    component: AboutPage,
    beforeEnter: [checkAuth, checkPermission],
  },
  {
    path: '/form/',
    component: FormPage,
    beforeEnter: [checkAuth, checkPermission],
  },
  {
    path: '/login/',
    component: LoginPage,
    name : "Login"
  },
  {
    path: '/register/',
    component: RegisterPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
