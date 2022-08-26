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
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import {
  ref,
  set,
  push,
  onChildAdded,
  Unsubscribe,
} from 'firebase/database';
import SendIcon from '@mui/icons-material/Send';
import { nanoid } from 'nanoid';
import { useAuth } from '../../hooks/useAuth';
import { selectors } from '../../store/slices/firebaseSlice';
import { Message } from '../../types/message';

import './Chat.scss';

export const Chat: FC<{}> = memo(() => {
  const { user } = useAuth();
  const db = useSelector(selectors.getDatabase);
  const messagesRef = ref(db, 'posts');
  const [messages, setMessages] = useState<Array<Message>>([]);
  const messagesDisplayBoxRef = useRef<HTMLDivElement | null>(null);

  const [inputMessage, setInputMessage] = useState('');

  const writeMessageToDB = useCallback(() => {
    if (inputMessage.trim()) {
      const newMessagesRef = push(messagesRef);

      set(newMessagesRef, {
        uID: user?.uid,
        username: user?.displayName,
        email: user?.email,
        profile_picture: user?.photoURL,
        message: inputMessage,
      });
      setInputMessage('');
    }
  }, [messagesRef, inputMessage]);

  let closeConnection: Unsubscribe;

  useEffect(() => {
    closeConnection = onChildAdded(messagesRef, (data) => {
      setMessages((prev: Array<Message>) => [...prev, data.val() as Message]);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    messagesDisplayBoxRef.current!.scrollTop = messagesDisplayBoxRef.current!.scrollHeight;
  }, [messages]);

  useEffect(() => {
    return () => {
      closeConnection();
    };
  }, []);

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        display="flex"
        style={{
          height: window.innerHeight - 70,
          maxHeight: window.innerHeight - 70,
        }}
      >
        <div
          className="messagesBox"
          ref={messagesDisplayBoxRef}
        >
          {messages.map(message => (
            user?.uid === message.uID
              ? (
                <div
                  key={nanoid()}
                  style={{
                    display: 'flex',
                    gridGap: '1px',
                    justifyContent: 'end',
                    padding: '0 20px',
                  }}
                >
                  <div
                    className="message-cloud message-cloud--from-me"
                  >
                    <div>
                      {message.message}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Avatar src={message.profile_picture} />
                  </div>
                </div>
              )
              : (
                <div
                  key={nanoid()}
                  style={{
                    display: 'flex',
                    gridGap: '1px',
                    justifyContent: 'start',
                    padding: '0 20px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Avatar src={message.profile_picture} />
                  </div>
                  <div
                    className="message-cloud message-cloud--from-them"
                  >
                    <div>
                      {message.username}
                    </div>
                    <div>
                      {message.message}
                    </div>
                  </div>
                </div>
              )
          ))}
        </div>

        <Grid
          container
          alignItems="flex-end"
          direction="column"
          style={{ width: '90%' }}
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
            variant="contained"
            size="small"
            onClick={writeMessageToDB}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
});
