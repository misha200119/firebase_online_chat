import React from 'react';
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { Login } from '../pages/login';
import { Chat } from '../pages/chat';
// eslint-disable-next-line import/no-cycle
import { Home } from '../pages/home';
// eslint-disable-next-line import/no-cycle
import { Videochat } from '../pages/videochat';
import { NotFound } from '../pages/notFound';
// eslint-disable-next-line import/no-cycle
import { VideochatRoom } from '../pages/videochatRoom';

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
  {
    path: RoutesURLs.VIDEOCHAT,
    component: <Videochat />,
  },
  {
    path: RoutesURLs.VIDEOCHAT_ROOM,
    component: <VideochatRoom />,
  },
];

export const privateRoutes: Routes = publicRoutes.concat([
  {
    path: RoutesURLs.CHAT,
    component: <Chat />,
  },
]);
