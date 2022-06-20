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
import { RootState } from '../types/storeTypes';

interface authorizationState {
  isLoggedIn: boolean;
}

const initialSate: authorizationState = {
  isLoggedIn: false,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialSate,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  setIsLoggedIn,

} = authorizationSlice.actions;

export const selectors = {
  getIsLoggedIn: (state: RootState) => state.authorization.isLoggedIn,
};

export default authorizationSlice.reducer;
