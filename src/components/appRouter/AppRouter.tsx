import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { privateRoutes, publicRoutes } from '../../utils/routes';
import { useAuth } from '../../hooks/useAuth';

export const AppRouter: FC<{}> = memo(() => {
  const { isAuth: isLoggedIn } = useAuth();

  return (
    isLoggedIn
      ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => (
            <Route
              path={path}
              element={component}
              key={nanoid()}
            />
          ))}
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route
              path={path}
              element={component}
              key={nanoid()}
            />
          ))}
        </Routes>
      )
  );
});
