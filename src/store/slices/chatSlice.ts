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
} from 'firebase/auth';
import { Message } from '../../types/message';
import { RootState } from '../../types/storeTypes';

interface ChatState {
  messages: Array<Message>;
}

const initialSate: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: 'userAuth',
  initialState: initialSate,
  reducers: {
    setUser: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setUser,
} = chatSlice.actions;

export const selectors = {
  getMessages: (state: RootState) => state.user.user,
};

export default chatSlice.reducer;
