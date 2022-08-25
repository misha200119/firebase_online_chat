import React from 'react';
import { Navigate } from 'react-router-dom';
import { Login } from '../pages/login';
import { Chat } from '../pages/chat';
import { Home } from '../pages/home';
import { Videochat } from '../pages/videochat';
import { NotFound } from '../pages/notFound';

// eslint-disable-next-line no-shadow
export enum RoutesURLs {
  LOGIN = '/login',
  VIDEOCHAT = '/videochat',
  VIDEOCHAT_ROOM = '/videochat/:id',
  CHAT = '/chat',
  HOME = '/home',
  ROOT = '/',
  WRONG = '*',
}

interface RouteDscription {
  path: RoutesURLs;
  component: JSX.Element;
}

type Routes = Array<RouteDscription>;

export const publicRoutes: Routes = [
  {
    path: RoutesURLs.ROOT,
    component: (<Navigate to={RoutesURLs.HOME} replace />),
  },
  {
    path: RoutesURLs.HOME,
    component: <Home />,
  },
  {
    path: RoutesURLs.LOGIN,
    component: <Login />,
  },
  {
    path: RoutesURLs.WRONG,
    component: <NotFound />,
  },
];

export const privateRoutes: Routes = publicRoutes.concat([
  {
    path: RoutesURLs.CHAT,
    component: <Chat />,
  },
  {
    path: RoutesURLs.VIDEOCHAT,
    component: <Videochat />,
  },
]);
