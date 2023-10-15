import { ReactElement } from 'react';
import LandingPage from '../pages/home/LandingPage';
import LogIn from '../pages/login';
import SignUp from '../pages/signup';
import Forgotpassword from '../pages/forgot-password';


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

  // Add more routes here as needed
];

