/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import firebaseAppReducer from './slices/firebaseSlice';
import videochatReducer from './slices/videochatSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    firebaseApp: firebaseAppReducer,
    videochat: videochatReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['userAuth/setUser'],
      // Ignore these field paths in all actions
      // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: [
        'user.user',
        'user.credential',
        'firebaseApp.app',
        'firebaseApp.database',
      ],
    },
  }),
});

export default store;
