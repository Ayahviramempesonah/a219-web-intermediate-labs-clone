import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import LoginPage from '../pages/auth/login/login-pages';
import RegisterPage from '../../../../citycareapp-dunia-media-starter/final/biasa/citycareapp-dunia-media-starter/src/scripts/pages/auth/register/register-page';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
};

export default routes;
