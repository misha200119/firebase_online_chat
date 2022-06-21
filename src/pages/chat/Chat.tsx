/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import React, { FC, memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ref,
  set,
  onValue,
  push,
  onChildAdded,
} from 'firebase/database';
import { useAuth } from '../../hooks/useAuth';
import { selectors } from '../../store/slices/firebaseSlice';

export const Chat: FC<{}> = memo(() => {
  const { user, credential } = useAuth();
  const db = useSelector(selectors.getDatabase);
  const messagesRef = ref(db, 'posts');

  const [inputMessage, setInputMessage] = useState('');

  const writeMessageToDB = () => {
    const newMessagesRef = push(messagesRef);

    set(newMessagesRef, {
      username: user?.displayName,
      email: user?.email,
      profile_picture: user?.photoURL,
      message: inputMessage,
    });

    setInputMessage('');
  };

  useEffect(() => {
    onChildAdded(messagesRef, (data) => {
      addCommentElement(postElement, data.key, data.val().text, data.val().author);
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
          messages
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
