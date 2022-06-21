import React, { FC, memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Navbar } from '../nav';
import {
  ROOT_PATH,
  WRONG_PATH,
  HOME_ROUTE,
  LOGIN_ROUTE,
  CHAT_ROUTE,
} from '../../utils/constansts';

import { Home } from '../../pages/home';
import { NotFound } from '../../pages/notFound';
import { Login } from '../../pages/login';
import { Chat } from '../../pages/chat';

// import { AppRouter } from '../appRouter';
import './App.scss';

export const App: FC<{}> = memo(() => {
  const { isAuth: isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />
      {/* <AppRouter /> */}
      {isLoggedIn
        ? (
          <Routes>
            <Route path={ROOT_PATH} element={<Navigate to={HOME_ROUTE} replace />} />

            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={CHAT_ROUTE} element={<Chat />} />

            <Route path={WRONG_PATH} element={<NotFound />} />
          </Routes>
        )
        : (
          <Routes>
            <Route path={ROOT_PATH} element={<Navigate to={HOME_ROUTE} replace />} />

            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={LOGIN_ROUTE} element={<Login />} />

            <Route path={WRONG_PATH} element={<NotFound />} />
          </Routes>
        )}
    </>
  );
});
