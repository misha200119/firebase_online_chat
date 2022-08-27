/* eslint-disable jsx-a11y/media-has-caption */
import { ToggleButton } from '@mui/material';
import React, { memo, FC, useState } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { LOCAL_VIDEO } from '../../hooks/useWebRTC';

interface Props {
  clientID: string;
  provideMediaRef: (clientID: string, instanceHTMLVideoElement: HTMLVideoElement | null) => void;
  containerLayoutStyle: {width: string, height: string};
}
export const Video: FC<Props> = memo(({
  clientID,
  provideMediaRef,
  containerLayoutStyle,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  return (
    <div
      style={
        {
          ...containerLayoutStyle,
        }
      }
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <video
          ref={(instance) => {
            provideMediaRef(clientID, instance);
          }}
          width="100%"
          height="100%"
          autoPlay
          playsInline
          muted={clientID === LOCAL_VIDEO || isMuted}
        />
        {!(clientID === LOCAL_VIDEO) && (
          <ToggleButton
            value="left"
            selected={isMuted}
            onChange={() => {
              setIsMuted((prev) => !prev);
            }}
            style={{
              width: 10,
              height: 10,
              position: 'absolute',
              bottom: 0,
              left: 'calc(50% - 5px)',
              marginBottom: 5,
            }}
          >
            <VolumeOffIcon />
          </ToggleButton>
        )}
      </div>
    </div>
  );
});
