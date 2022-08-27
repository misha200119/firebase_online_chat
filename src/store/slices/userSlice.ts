/* eslint-disable max-len */
// there I imported rootState from store because i use it in selectors for this inner state

/* eslint-disable import/no-cycle */

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

/* eslint-disable no-param-reassign */

// i use action before initialization in thunk so i need it to off warning of linter

/* eslint-disable @typescript-eslint/no-use-before-define */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Auth,
  GoogleAuthProvider,
  OAuthCredential,
  // reauthenticateWithCredential,
  User,
  UserCredential,
} from 'firebase/auth';
import { RootState } from '../../types/storeTypes';

// const credentialsFromLocalStorage = JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH_CREDENTIALS) as string);
// const userCredentialsFromLocalStorage = JSON.parse(localStorage.getItem(LocalStorageKeys.USER_CREDENTIALS) as string);
// const lastSignedUser = reauthenticateWithCredential(userCredentialsFromLocalStorage, credentialsFromLocalStorage);

// eslint-disable-next-line no-console
// console.log(lastSignedUser);

interface authorizationState {
  user: User | null;
  credential: OAuthCredential | null;
  auth: Auth | null;
}

const initialSate: authorizationState = {
  user: null,
  credential: null,
  auth: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialSate,
  reducers: {
    setUser: (state, action: PayloadAction<UserCredential>) => {
      const userCredentials = action.payload.user;
      const credentials = GoogleAuthProvider.credentialFromResult(action.payload);

      state.user = userCredentials;
      state.credential = credentials;
    },
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
    },
    setDirectlyUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      state.credential = null;
    },
  },
});

export const {
  setUser,
  removeUser,
  setDirectlyUser,
  setAuth,
} = userSlice.actions;

export const selectors = {
  getUserInfo: (state: RootState) => state.user.user,
  getUserСredential: (state: RootState) => state.user.credential,
  getAuth: (state: RootState) => state.user.auth,
};

export default userSlice.reducer;
