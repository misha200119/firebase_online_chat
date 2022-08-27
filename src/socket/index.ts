import { io } from 'socket.io-client';

const options = {
  'force new connection': true,
  reconnetionAttempts: 'Infinity',
  timeout: 15000,
  transports: ['websocket'],
};

const socket = io(process.env.REACT_APP_SIGNAL_SERVER_URL || '', options);

export default socket;
