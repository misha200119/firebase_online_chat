import React, { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { Navbar } from '../nav';

import { AppRouter } from '../appRouter';
import { selectors } from '../../store/slices/firebaseSlice';
import { useAppDispatch } from '../../hooks/typedReduxHooks';
import { setAuth, setDirectlyUser } from '../../store/slices/userSlice';

import './App.scss';

export const App: FC<{}> = memo(() => {
  const dispatch = useAppDispatch();
  const app = useSelector(selectors.getFirebaseApp);
  const auth = getAuth(app);

  dispatch(setAuth(auth));

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setDirectlyUser(user));
    }
  });

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
});
