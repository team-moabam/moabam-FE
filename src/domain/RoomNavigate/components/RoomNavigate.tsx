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
  let roomId: string | number = '';

  if (certifyingRoom) {
    roomId = certifyingRoom;
  } else if (latestRoom) {
    roomId = latestRoom;
  } else {
    roomId = closestRoom;
  }

  if (roomId) {
    return (
      <Navigate
        to={`/room/${roomId}`}
        replace={true}
      />
    );
  } else {
    return <NoRoom />;
  }
};

export default RoomNavigate;
