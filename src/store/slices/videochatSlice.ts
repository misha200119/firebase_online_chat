// there I imported rootState from store because i use it in selectors for this inner state

/* eslint-disable import/no-cycle */

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

/* eslint-disable no-param-reassign */

// i use action before initialization in thunk so i need it to off warning of linter

/* eslint-disable @typescript-eslint/no-use-before-define */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
} from 'firebase/auth';
import { Socket } from 'socket.io-client';
import { RootState } from '../../types/storeTypes';
import ACTIONS from '../../socket/actions';
import socket from '../../socket';

interface ChatState {
  socket: Socket;
  rooms: Array<string>;
}

const initialSate: ChatState = {
  socket,
  rooms: [],
};

export const updateRooms = createAsyncThunk(
  'videochat/updateRooms',
  async (rooms :Array<string>, thunkAPI) => {
    const { dispatch } = thunkAPI;

    // // eslint-disable-next-line no-console
    // console.log('thunk called');

    dispatch(setRooms(rooms));
  },
);

export const requestCurrentRooms = () => {
  socket.emit(ACTIONS.REQUEST_ROOMS);
};

export const videochatSlice = createSlice({
  name: 'videochat',
  initialState: initialSate,
  reducers: {
    setRooms: (state, action: PayloadAction<Array<string>>) => {
      state.rooms = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(updateRooms.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     state.rooms = action.payload;
  //   });
  // },
});

export const {
  setRooms,
} = videochatSlice.actions;

export const selectors = {
  getRooms: (state: RootState) => state.videochat.rooms,
  getSocket: (state: RootState) => state.videochat.socket,
};

export default videochatSlice.reducer;
