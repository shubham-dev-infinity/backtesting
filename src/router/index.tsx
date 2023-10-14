import React, { ReactElement } from 'react';
import LandingPage from '../pages/login/home/LandingPage';


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
  }

  // Add more routes here as needed
];

