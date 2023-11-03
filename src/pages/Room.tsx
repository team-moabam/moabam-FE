import { useEffect } from 'react';
import useMoveRoute from '@/core/hooks/useMoveRoute';

const Room = () => {
  const id = '123'; //TODO : id 검사
  const moveTo = useMoveRoute();
  useEffect(() => {
    moveTo('roomDetail', { roomId: id });
  });
  return null;
};

export default Room;
