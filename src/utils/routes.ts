import { FC } from 'react';
import { CHAT_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from './constansts';
import { Login } from '../pages/login';
import { Chat } from '../pages/chat';
import { Home } from '../pages/home';

interface RouteDscription {
  path: string;
  component: FC;
}

type Routes = Array<RouteDscription>;

export const publicRoutes: Routes = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
];

export const privateRoutes: Routes = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: CHAT_ROUTE,
    component: Chat,
  },
];
