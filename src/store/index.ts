/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import firebaseAppReducer from './slices/firebaseSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    firebaseApp: firebaseAppReducer,
  },
});

export default store;
