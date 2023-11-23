import React from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import timeOption from '@/core/api/options/time';
import { roomOptions } from '@/core/api/options';
import { MyJoinRoom } from '@/core/types';
import { useMoveRoute } from '@/core/hooks';
import pickRoomToShow from '../utils/pickRoomToShow';
import NoRoom from './NoRoom';

const RoomNavigate = () => {
  const moveTo = useMoveRoute();
  const [{ data: today }, { data }] = useSuspenseQueries({
    queries: [
      timeOption,
      {
        ...roomOptions.myJoin(),
        select: (data: MyJoinRoom) => data.participatingRooms
      }
    ]
  });

  const roomToMove = pickRoomToShow(data, today);
  if (roomToMove) {
    moveTo('roomDetail', { roomId: roomToMove.roomId }, { replace: true });
  } else {
    return <NoRoom />;
  }
};

export default RoomNavigate;
