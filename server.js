/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');
const ioLib = require('socket.io');
const serverLib = require('http');
const { version, validate } = require('uuid');
const ACTIONS = require('./src/socket/actions');

const app = express();
const server = serverLib.createServer(app);
const io = ioLib(server);

const PORT = process.env.PORT || 3001;

function getClientRooms() {
  const { rooms } = io.sockets.adapter;

  return Array.from(rooms.keys())
    .filter(roomID => validate(roomID) && version(roomID) === 4);
}

function shareRoomsInfo() {
  io.emit(ACTIONS.SHARE_ROOMS, {
    rooms: getClientRooms(),
  });
}

io.on('connection', socket => {
  console.log('Socket connected');

  socket.on(ACTIONS.REQUEST_ROOMS, shareRoomsInfo);
  // shareRoomsInfo();

  socket.on(ACTIONS.JOIN, config => {
    const { room: roomID } = config;
    const { rooms: joinedRooms } = socket;

    if (Array.from(joinedRooms).includes(roomID)) {
      console.warn(`Already joined to ${roomID}`);
    } else {
      const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

      clients.forEach(clientID => {
        io.to(clientID).emit(ACTIONS.ADD_PEER, {
          peerID: socket.id,
          createOffer: false,
        });

        socket.emit(ACTIONS.ADD_PEER, {
          peerID: clientID,
          createOffer: true,
        });
      });
    }

    socket.join(roomID);
    shareRoomsInfo();
  });

  function leaveRoom() {
    const { rooms } = socket;

    Array.from(rooms)
      .forEach(roomID => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

        clients.forEach(clientID => {
          io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
            peerID: socket.id,
          });

          socket.emit(ACTIONS.REMOVE_PEER, {
            peerID: clientID,
          });
        });

        socket.leave(roomID);
      });

    shareRoomsInfo();
  }

  socket.on(ACTIONS.LEAVE, leaveRoom);
  socket.on('disconnecting', leaveRoom);

  socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
    io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
      peerID: socket.id,
      sessionDescription,
    });
  });

  socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
    io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
      peerID: socket.id,
      iceCandidate,
    });
  });
});

server.listen(PORT, () => {
  console.log('Server started!');
});
