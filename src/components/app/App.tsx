import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectors } from '../../store/authorizationSlice';
import { Navbar } from '../nav';
import {
  ROOT_PATH,
  WRONG_PATH,
  HOME_ROUTE,
  LOGIN_ROUTE,
  CHAT_ROUTE,
} from '../../utils/constansts';

import './App.scss';
import { Home } from '../../pages/home';
import { NotFound } from '../../pages/notFound';
import { Login } from '../../pages/login';
import { Chat } from '../../pages/chat';
// import { AppRouter } from '../appRouter';

export const App: FC<{}> = () => {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

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
};
