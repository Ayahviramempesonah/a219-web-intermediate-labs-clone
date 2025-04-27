import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import LoginPage from '../pages/auth/login/login-pages';
// import { RegisterPages } from '../pages/auth/register/register-pages';
import * as AUTH from '../utils/auth'
import * as Api from '../../data/api'
import {checkUnauthenticatedRouteOnly} from '../utils/auth'
import RegisterPage from '../pages/auth/register/register-pages';

const routes = {
  '/': () => checkUnauthenticatedRouteOnly(new HomePage()),
  '/about': new AboutPage(),
  '/login': new LoginPage(),
   '/register': new RegisterPage(),
};

export default routes;
