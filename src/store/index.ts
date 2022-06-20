/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer from './authorizationSlice';

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
  },
});

export default store;
