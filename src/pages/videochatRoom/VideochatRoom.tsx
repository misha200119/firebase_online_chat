/* eslint-disable jsx-a11y/media-has-caption */
import { Container } from '@mui/system';
import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useWebRTC } from '../../hooks/useWebRTC';
import { Video } from '../../components/video';

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

  const { clients, provideMediaRef } = useWebRTC(roomID);
  const videoLayout = layout(clients.length);

  return (
    <Container>
      <h1>Videochat room</h1>
      <h1>{roomID}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          height: '80vh',
        }}
      >
        {clients.map((clientID: string, index: number) => (
          <Video
            clientID={clientID}
            provideMediaRef={provideMediaRef}
            key={clientID}
            containerLayoutStyle={videoLayout[index]}
          />
          // <div key={clientID} style={videoLayout[index]}>
          //   <video
          //     ref={(instance) => {
          //       provideMediaRef(clientID, instance);
          //     }}
          //     width="100%"
          //     height="100%"
          //     autoPlay
          //     playsInline
          //     muted={clientID === LOCAL_VIDEO}
          //   />
          // </div>
        ))}
      </div>
    </Container>
  );
});
