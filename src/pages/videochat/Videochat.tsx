import {
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React, { FC, memo } from 'react';
import { useAppSelector } from '../../hooks/typedReduxHooks';
import { selectors } from '../../store/slices/videochatSlice';

export const Videochat: FC<{}> = memo(() => {
  const avalibleRooms = useAppSelector(selectors.getRooms);

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        display="flex"
        style={{ height: window.innerHeight - 68 }}
      >
        <List
          sx={{
            width: '100%',
            overflowY: 'auto',
            height: '70vh',
            padding: 0,
          }}
          component="nav"
          aria-labelledby="avalible-rooms"
          subheader={(
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            >
              Avalible rooms
            </ListSubheader>
          )}
        >

          {avalibleRooms.map(roomID => (
            <ListItemButton key={roomID}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={roomID} />
            </ListItemButton>
          ))}
        </List>
      </Grid>
    </Container>
  );
});
