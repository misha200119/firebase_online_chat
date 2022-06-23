import { io } from 'socket.io-client';

const options = {
  'force new connection': true,
  reconnetionAttempts: 'Infinity',
  timeout: 15000,
  transports: ['websocket'],
};

const socket = io('http://localhost:3001', options);

export default socket;
