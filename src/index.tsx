import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { App } from './components/app';
import rootStore from './store';

import './index.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyAXfGe3IcD2w0YbDN7wLLQ6ElaSTcfsYkQ',
  authDomain: 'chat-react-eaa0f.firebaseapp.com',
  projectId: 'chat-react-eaa0f',
  storageBucket: 'chat-react-eaa0f.appspot.com',
  messagingSenderId: '254749271243',
  appId: '1:254749271243:web:17ecfe4efe5f947fd1674e',
  measurementId: 'G-0RNETXFQ7W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

ReactDOM.render(
  <HashRouter>
    <Provider store={rootStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
