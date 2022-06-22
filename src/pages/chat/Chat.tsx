/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import {
  ref,
  set,
  onValue,
  push,
  onChildAdded,
} from 'firebase/database';
import { nanoid } from 'nanoid';
import { useAuth } from '../../hooks/useAuth';
import { selectors } from '../../store/slices/firebaseSlice';
import { Message } from '../../types/message';

export const Chat: FC<{}> = memo(() => {
  const { user } = useAuth();
  const db = useSelector(selectors.getDatabase);
  const messagesRef = ref(db, 'posts');
  const [messages, setMessages] = useState<Array<Message>>([]);

  const [inputMessage, setInputMessage] = useState('');

  const writeMessageToDB = () => {
    const newMessagesRef = push(messagesRef);

    set(newMessagesRef, {
      uID: user?.uid,
      username: user?.displayName,
      email: user?.email,
      profile_picture: user?.photoURL,
      message: inputMessage,
    });

    setInputMessage('');
  };

  useEffect(() => {
    onChildAdded(messagesRef, (data) => {
      setMessages((prev: Array<Message>) => [...prev, data.val() as Message]);
      // eslint-disable-next-line no-console
      // console.log(data.val());
    });
  }, []);

  const onMessagesUpdate = useCallback(() => {

  }, []);

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        display="flex"
        style={{ height: window.innerHeight - 64 }}
      >
        <div
          style={{
            width: '80%',
            height: '70vh',
            border: '1px solid gray',
            overflowY: 'auto',
          }}
        >
          {messages.map(message => (
            <div
              key={nanoid()}
              style={{
                margin: 10,
                border: user?.uid === message.uID ? '2px solid green' : '2px solid red',
                marginLeft: user?.uid === message.uID ? 'auto' : '10px',
                width: 'fit-content',
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.profile_picture} />
                <div>{message.username}</div>
              </Grid>
              <div>
                {message.message}
              </div>
            </div>
          ))}
        </div>

        <Grid
          container
          alignItems="flex-end"
          direction="column"
          style={{ width: '80%' }}
        >
          <TextField
            style={{ marginTop: 10 }}
            fullWidth
            maxRows={1}
            multiline
            size="small"
            id="outlined-basic"
            label="Enter message"
            variant="outlined"
            value={inputMessage}
            onChange={({ target }) => setInputMessage(target.value)}
          />
          <Button
            size="small"
            onClick={writeMessageToDB}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
});
