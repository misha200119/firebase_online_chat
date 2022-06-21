import {
  Box,
  Button,
  Container,
  Grid,
} from '@mui/material';
import React, { FC } from 'react';

export const Login: FC<{}> = () => {
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
            <Button variant="outlined">Sing in with google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
