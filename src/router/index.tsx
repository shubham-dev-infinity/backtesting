import { ReactElement } from 'react';
import LandingPage from '../pages/home/LandingPage';
import LogIn from '../pages/login';
import SignUp from '../pages/signup';
import Forgotpassword from '../pages/forgot-password';
import Features from '../pages/features';


export interface RouteConfig {
  path: string;
  element: ReactElement;
  publicRoute: boolean;
  is_blank: boolean;
}

export const ROUTES: RouteConfig[] = [
  {
    path: '/',
    element: <LandingPage />,
    publicRoute: true,
    is_blank: false
  },
  {
    path: '/login',
    element: <LogIn />,
    publicRoute: true,
    is_blank: true
  },
  {
    path: '/signup',
    element: <SignUp />,
    publicRoute: true,
    is_blank: true
  },
  {
    path: '/reset-password',
    element: <Forgotpassword />,
    publicRoute: true,
    is_blank: true
  },
  {
    path: '/features',
    element: <Features />,
    publicRoute: true,
    is_blank: false
  },
  {
    path: '/plan',
    element: <Features />,
    publicRoute: true,
    is_blank: false
  },
  {
    path: '/contact-us',
    element: <Features />,
    publicRoute: true,
    is_blank: false
  },

  // Add more routes here as needed
];

