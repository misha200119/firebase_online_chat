import React, { FC, memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/typedReduxHooks';
import {
  selectors,
  requestCurrentRooms,
  updateRooms,
} from '../../store/slices/videochatSlice';
import ACTIONS from '../../socket/actions';
import { ChatList } from '../../components/chatList';

export const Videochat: FC<{}> = memo(() => {
  const avalibleRooms = useAppSelector(selectors.getRooms);
  const socket = useAppSelector(selectors.getSocket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      dispatch(updateRooms(rooms));
    });
    requestCurrentRooms();
  }, []);

  return (
    <ChatList rooms={avalibleRooms} />
  );
});
