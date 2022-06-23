/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { LOCAL_VIDEO, useWebRTC } from '../../hooks/useWebRTC';

export const VideochatRoom: FC<{}> = memo(() => {
  const roomID = useParams().id || '';

  const { clients, provideMediaRef } = useWebRTC(roomID);

  // eslint-disable-next-line no-console
  // console.log(clients);

  return (
    <div>
      <h1>Videochat room</h1>
      <h1>{roomID}</h1>
      <div>
        {clients.map((clientID: string) => (
          <div key={clientID}>
            <video
              ref={(instance) => {
                provideMediaRef(clientID, instance);
              }}
              autoPlay
              playsInline
              muted={clientID === LOCAL_VIDEO}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
