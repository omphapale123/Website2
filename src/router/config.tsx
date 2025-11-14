
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import AboutPage from '../pages/about/page';
import TechnologyPage from '../pages/technology/page';
import PilotPage from '../pages/pilot/page';
import LoginPage from '../pages/login/page';
import SignupSuccessPage from '../pages/signup-success/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/technology',
    element: <TechnologyPage />
  },
  {
    path: '/pilot',
    element: <PilotPage />
  },
  {
    path: '/contact',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup-success',
    element: <SignupSuccessPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
