import {
  Box,
  Button,
  Container,
  Grid,
} from '@mui/material';
import React, {
  FC,
  memo,
  useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/typedReduxHooks';
import { selectors } from '../../store/slices/firebaseSlice';
import { setUser } from '../../store/slices/userSlice';
// eslint-disable-next-line import/no-cycle
import { RoutesURLs } from '../../utils/routes';

export const Login: FC<{}> = memo(() => {
  const app = useSelector(selectors.getFirebaseApp);
  const auth = getAuth(app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line no-console
  console.log(auth.currentUser, 'auth.currentUser');

  const singInWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      dispatch(setUser(result));
      navigate(RoutesURLs.HOME);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      throw new Error('some issue with sing in with google');
    }
  }, [auth, navigate]);

  return (
    <Container>
      <Grid
        alignItems="center"
        justifyContent="center"
        display="flex"
        style={{ height: window.innerHeight - 64 }}
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button variant="outlined" onClick={singInWithGoogle}>Sing in with google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
});
