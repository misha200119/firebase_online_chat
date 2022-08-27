/* eslint-disable jsx-a11y/media-has-caption */
import { Container } from '@mui/system';
import React, {
  FC, memo, useEffect, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToggleButton } from '@mui/material';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { Video } from '../../components/video';
import { useWebRTC } from '../../hooks/useWebRTC';
// eslint-disable-next-line import/no-cycle
import { RoutesURLs } from '../../utils/routes';

function layout(clientsCount = 1) {
  const pairs = Array.from<any>({ length: clientsCount })
    .reduce((acc, next, index, arr) => {
      if (index % 2 === 0) {
        acc.push(arr.slice(index, index + 2));
      }

      return acc;
    }, []);

  const pairsCount = pairs.length;
  const height = `${100 / pairsCount}%`;

  return pairs.map((row: Array<any>, index: number, arr: Array<any>) => {
    if (index === arr.length - 1 && row.length === 1) {
      return [{
        width: '100%',
        height,
      }];
    }

    return row.map(() => ({
      width: '50%',
      height,
    }));
  }).flat();
}

export const VideochatRoom: FC<{}> = memo(() => {
  const roomID = useParams().id || '';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { clients, provideMediaRef, deviceMuteSetter } = useWebRTC(roomID);
  const videoLayout = layout(clients.length);

  const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    deviceMuteSetter(!isMicrophoneMuted, 'microphone');
  }, [isMicrophoneMuted]);

  useEffect(() => {
    deviceMuteSetter(!isCameraOff, 'camera');
  }, [isCameraOff]);

  return (
    <Container>
      <h1>Videochat room</h1>
      <h1>{roomID}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '80vh',
          flexWrap: 'wrap',
        }}
      >
        {clients.map((clientID: string, index: number) => (
          <Video
            clientID={clientID}
            provideMediaRef={provideMediaRef}
            key={clientID}
            containerLayoutStyle={videoLayout[index]}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ToggleButton
          value="micro"
          selected={isMicrophoneMuted}
          onChange={() => {
            setIsMicrophoneMuted((prev) => !prev);
          }}
          style={{
            // width: 10,
            // height: 10,
            marginBottom: 5,
          }}
        >
          {isMicrophoneMuted ? <MicOffIcon /> : <MicIcon />}
        </ToggleButton>
        <ToggleButton
          value="camera"
          selected={isCameraOff}
          onChange={() => {
            // eslint-disable-next-line no-console
            setIsCameraOff((prev) => !prev);
          }}
          style={{
            // width: 10,
            // height: 10,
            marginBottom: 5,
          }}
        >
          {isCameraOff ? <VideocamOffIcon /> : <VideocamIcon />}
        </ToggleButton>
        <ToggleButton
          value="endCall"
          onClick={() => {
            navigate(RoutesURLs.VIDEOCHAT, { replace: true });
          }}
          style={{
            // width: 10,
            // height: 10,
            marginBottom: 5,
          }}
        >
          <CallEndIcon fontSize="inherit" />
        </ToggleButton>
      </div>
    </Container>
  );
});
