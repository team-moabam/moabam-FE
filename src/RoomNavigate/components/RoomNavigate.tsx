import { Navigate } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import timeOption from '@/core/api/options/time';
import { roomOptions } from '@/core/api/options';
import { MyJoinRoom } from '@/core/types';
import pickRoom from '../utils/pickRoom';
import NoRoom from './NoRoom';

const RoomNavigate = () => {
  const [{ data: today }, { data }] = useSuspenseQueries({
    queries: [
      timeOption,
      {
        ...roomOptions.myJoin(),
        select: (data: MyJoinRoom) => data.participatingRooms
      }
    ]
  });

  const { certifyingRoom, latestRoom, closestRoom } = pickRoom(data, today);
  const roomParam: { roomId: string | number } = { roomId: '' };

  if (certifyingRoom) {
    roomParam.roomId = certifyingRoom;
  } else if (latestRoom) {
    roomParam.roomId = latestRoom;
  } else {
    roomParam.roomId = closestRoom;
  }

  if (roomParam.roomId === '') {
    return <NoRoom />;
  } else {
    return (
      <Navigate
        to={`/room/${roomParam.roomId}`}
        replace={true}
      />
    );
  }
};

export default RoomNavigate;
