/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, memo, useCallback } from 'react';
import {
  Button,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
} from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
// eslint-disable-next-line import/no-cycle
import { RoutesURLs } from '../../utils/routes';

interface Props {
  rooms: Array<string>;
}

export const ChatList:FC<Props> = memo(({ rooms }) => {
  const navigate = useNavigate();

  const createNewRoom = useCallback(() => {
    navigate(`${RoutesURLs.VIDEOCHAT}/${v4()}`);
  }, []);

  const connectRoom = useCallback((roomID: string) => {
    navigate(`${RoutesURLs.VIDEOCHAT}/${roomID}`);
  }, []);

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

          {rooms.map((roomID) => (
            <Tooltip title="Click to join room" key={roomID}>
              <ListItemButton
                onClick={() => {
                  connectRoom(roomID);
                }}
              >
                <ListItemIcon>
                  <VideoCameraFrontIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ wordWrap: 'break-word' }}
                  primary={roomID}
                />
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          ))}
        </List>
        <Button
          variant="outlined"
          endIcon={<AddBoxIcon />}
          onClick={createNewRoom}
        >
          Create room
        </Button>
      </Grid>
    </Container>
  );
});
