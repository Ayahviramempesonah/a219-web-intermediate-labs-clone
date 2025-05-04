import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import RegisterPage from '../pages/register/register-pages';
import LoginPage from '../pages/login/login-pages';
import { checkAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';
import DetailPage from '../pages/detail/detail-pages';

const routes = {
  '/': () => checkAuthenticatedRoute(new HomePage()),
  '/about': () => checkAuthenticatedRoute(new AboutPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/stories/:id': () => checkAuthenticatedRoute(new DetailPage()),
};


console.log('Routes:', routes);
// console.log('Active route key:', routeKey);
// console.log('Page:', Page);

export default routes;
