// there I imported rootState from store because i use it in selectors for this inner state

/* eslint-disable import/no-cycle */

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

/* eslint-disable no-param-reassign */

// i use action before initialization in thunk so i need it to off warning of linter

/* eslint-disable @typescript-eslint/no-use-before-define */

import { createSlice } from '@reduxjs/toolkit';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { RootState } from '../../types/storeTypes';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

interface authorizationState {
  app: FirebaseApp | undefined;
}

const initialSate: authorizationState = {
  app: initializeApp(firebaseConfig),
};

export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: initialSate,
  reducers: {
  },
});

// export const {
// } = firebaseSlice.actions;

export const selectors = {
  getFirebaseApp: (state: RootState) => state.firebaseApp.app,
};

export default firebaseSlice.reducer;
