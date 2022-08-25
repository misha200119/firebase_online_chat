import React, { FC, memo } from 'react';
import { Navbar } from '../nav';

import { AppRouter } from '../appRouter';
import './App.scss';

export const App: FC<{}> = memo(() => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
});
