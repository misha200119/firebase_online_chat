import React, {
  FC,
  memo,
  useCallback,
} from 'react';
import {
  Container,
  Grid,
} from '@mui/material';
import GoogleButton from 'react-google-button';
import { useSelector } from 'react-redux';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { selectors } from '../../store/slices/userSlice';
// eslint-disable-next-line import/no-cycle
import { RoutesURLs } from '../../utils/routes';

export const Login: FC<{}> = memo(() => {
  const auth = useSelector(selectors.getAuth);
  const navigate = useNavigate();

  const singInWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();

      // auth cannot be a null because it creates in root App component
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await signInWithPopup(auth!, provider);
      // auth sing in listener in App component check if somebody connects
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
        <GoogleButton onClick={singInWithGoogle} />
      </Grid>
    </Container>
  );
});
