// there I imported rootState from store because i use it in selectors for this inner state

/* eslint-disable import/no-cycle */

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

/* eslint-disable no-param-reassign */

// i use action before initialization in thunk so i need it to off warning of linter

/* eslint-disable @typescript-eslint/no-use-before-define */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
} from 'firebase/auth';
import { Socket } from 'socket.io-client';
import { RootState } from '../../types/storeTypes';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';

interface ChatState {
  socket: Socket;
  rooms: Array<string>;
}

const initialSate: ChatState = {
  socket,
  rooms: [],
};

export const videochatSlice = createSlice({
  name: 'videochat',
  initialState: initialSate,
  reducers: {
    startListenRooms: (state) => {
      state.socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
        state.rooms = rooms;
      });
    },
  },
});

export const {
  startListenRooms,
} = videochatSlice.actions;

export const selectors = {
  getRooms: (state: RootState) => state.videochat.rooms,
};

export default videochatSlice.reducer;
