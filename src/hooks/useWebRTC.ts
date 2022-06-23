/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useEffect, useCallback } from 'react';
import { freeice } from 'freeice';
import { useStateWithCallback } from './useStateWithCallback';
import socket from '../socket';
import ACTIONS from '../socket/actions';

export const LOCAL_VIDEO = 'LOCAL_VIDEO';

type PeerMediaElement = {
  volume: number;
  srcObject: object;
} | null;

type Payload = {
  [key: string]: any,
};

interface PeerMediaElements {
  [key: string]: PeerMediaElement | null;
}

export const useWebRTC = (roomID: string) => {
  const [clients, updateClients] = useStateWithCallback([]);

  const peerConnections = useRef<{[key: string]: RTCPeerConnection}>({});
  const localMediaSteam = useRef<MediaStream | null>(null);
  const peerMediaElements = useRef<PeerMediaElements>({
    [LOCAL_VIDEO]: null,
  });

  const addNewClient = useCallback((newClient, callback) => {
    if (!clients.includes(newClient)) {
      updateClients((arr: any) => [...arr, newClient], callback);
    }
  }, [clients, updateClients]);

  useEffect(() => {
    async function handleNewPeer(payload: Payload) {
      const { peerID, createOffer } = payload;

      if (peerID in peerConnections.current) {
        return console.warn(`Already connected to peer ${peerID}`);
      }

      peerConnections.current[peerID] = new RTCPeerConnection({
        iceServers: freeice(),
      });

      peerConnections.current[peerID].onicecandidate = event => {
        if (event.candidate) {
          socket.emit(ACTIONS.RELAY_ICE, {
            peerID,
            iceCandidate: event.candidate,
          });
        }
      };

      let tracksCount = 0;

      peerConnections.current[peerID].ontrack = async ({ streams: [remoteStream] }) => {
        tracksCount += 1;

        // i wait when video & audio track is received
        if (tracksCount === 2) {
          addNewClient(peerID, () => {
            const peerElement = peerMediaElements.current[peerID];

            if (peerElement) {
              peerElement.srcObject = remoteStream;
            }
          });
        }

        const lms = localMediaSteam.current;

        if (lms) {
          lms.getTracks().forEach(track => {
            peerConnections.current[peerID].addTrack(track, lms);
          });
        }

        if (createOffer) {
          const offer = await peerConnections.current[peerID].createOffer();

          await peerConnections.current[peerID].setLocalDescription(offer);

          socket.emit(ACTIONS.RELAY_SDP, {
            peerID,
            sessionDescription: offer,
          });
        }
      };
    }

    socket.on(ACTIONS.ADD_PEER, handleNewPeer);
  }, []);

  useEffect(() => {
    const handleRemovePeer = (payload: Payload) => {
      const { peerID } = payload;

      if (peerConnections.current[peerID]) {
        peerConnections.current[peerID].close();
      }

      delete peerConnections.current[peerID];
      delete peerMediaElements.current[peerID];

      updateClients((list: Array<string>) => list.filter(c => c !== peerID));
    };

    socket.on(ACTIONS.REMOVE_PEER, handleRemovePeer);
  }, []);

  useEffect(() => {
    async function setRemoteMedia(payload: Payload) {
      const { peerID, sessionDescription: remoteDescription } = payload;

      await peerConnections.current[peerID].setRemoteDescription(
        new RTCSessionDescription(remoteDescription),
      );

      if (remoteDescription.type === 'offer') {
        const answer = await peerConnections.current[peerID].createAnswer();

        await peerConnections.current[peerID].setLocalDescription(answer);

        socket.emit(ACTIONS.RELAY_SDP, {
          peerID,
          sessionDescription: answer,
        });
      }
    }

    socket.on(ACTIONS.SESSION_DESCRIPTION, setRemoteMedia);
  }, []);

  useEffect(() => {
    socket.on(ACTIONS.ICE_CANDIDATE, ({ peerID, iceCandidate }) => {
      peerConnections.current[peerID].addIceCandidate(
        new RTCIceCandidate(iceCandidate),
      );
    });
  }, []);

  useEffect(() => {
    async function startCapture() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: { min: 1024, ideal: 1280, max: 1920 },
          height: { min: 576, ideal: 720, max: 1080 },
        },
      });

      localMediaSteam.current = stream;

      addNewClient(LOCAL_VIDEO, () => {
        const localVideoElement = peerMediaElements.current[LOCAL_VIDEO];

        if (localVideoElement && localMediaSteam.current) {
          localVideoElement.volume = 0;
          localVideoElement.srcObject = localMediaSteam.current;
        }
      });
    }

    startCapture()
      .then(() => socket.emit(ACTIONS.JOIN, { room: roomID }))
      .catch(e => console.error('Error getting userMedia', e));

    return () => {
      if (localMediaSteam && localMediaSteam.current) {
        localMediaSteam.current.getTracks().forEach(track => {
          track.stop();
        });
        socket.emit(ACTIONS.LEAVE);
      }
    };
  }, [roomID]);

  const provideMediaRef = useCallback((id, node) => {
    peerMediaElements.current[id] = node;
  }, []);

  return { clients, provideMediaRef };
};
