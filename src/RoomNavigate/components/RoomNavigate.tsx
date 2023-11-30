import React, { useEffect } from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import timeOption from '@/core/api/options/time';
import { roomOptions } from '@/core/api/options';
import { MyJoinRoom } from '@/core/types';
import { useMoveRoute } from '@/core/hooks';
import pickRoom from '../utils/pickRoom';
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

  useEffect(() => {
    if (data.length === 0) return;

    const { certifyingRoom, latestRoom, closestRoom } = pickRoom(data, today);
    const roomParam: { roomId: string | number } = { roomId: '' };

    if (certifyingRoom) {
      roomParam.roomId = certifyingRoom;
    } else if (latestRoom) {
      roomParam.roomId = latestRoom;
    } else {
      roomParam.roomId = closestRoom;
    }

    moveTo('roomDetail', roomParam, { replace: true });
  }, [data, moveTo, today]);

  return <NoRoom />;
};

export default RoomNavigate;
