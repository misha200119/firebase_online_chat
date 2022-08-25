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
  GoogleAuthProvider,
  OAuthCredential,
  reauthenticateWithCredential,
  User,
  UserCredential,
} from 'firebase/auth';
import { RootState } from '../../types/storeTypes';
import LocalStorageKeys from '../../utils/localStorageKeys';

const credentialsFromLocalStorage = JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH_CREDENTIALS) as string);
const userCredentialsFromLocalStorage = JSON.parse(localStorage.getItem(LocalStorageKeys.USER_CREDENTIALS) as string);
const lastSignedUser = reauthenticateWithCredential(userCredentialsFromLocalStorage, credentialsFromLocalStorage);

// eslint-disable-next-line no-console
console.log(lastSignedUser);

interface authorizationState {
  user: User | null;
  credential: OAuthCredential | null;
}

const initialSate: authorizationState = {
  user: null,
  credential: null,
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
      localStorage.setItem(LocalStorageKeys.AUTH_CREDENTIALS, JSON.stringify(credentials));
      localStorage.setItem(LocalStorageKeys.USER_CREDENTIALS, JSON.stringify(userCredentials));
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
} = userSlice.actions;

export const selectors = {
  getUserInfo: (state: RootState) => state.user.user,
  getUserСredential: (state: RootState) => state.user.credential,
};

export default userSlice.reducer;
