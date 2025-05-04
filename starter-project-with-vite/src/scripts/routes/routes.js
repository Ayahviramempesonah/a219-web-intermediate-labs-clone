import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import LoginPage from '../pages/auth/login/login-pages';
// import { RegisterPages } from '../pages/auth/register/register-pages';
import * as AUTH from '../utils/auth'
import * as Api from '../../data/api'
import {checkUnauthenticatedRouteOnly,checkAuthenticatedRoute} from '../utils/auth'
import RegisterPage from '../pages/auth/register/register-pages';

 const routes = {
  '/': () => checkUnauthenticatedRouteOnly(new HomePage()),
  '/about':  () => checkUnauthenticatedRouteOnly(new AboutPage())   ,
  '/login': () =>  checkUnauthenticatedRouteOnly(new LoginPage()) ,
   '/register': () =>  checkUnauthenticatedRouteOnly(new RegisterPage()) ,
};

export default routes;
