import { useEffect } from 'react';
import useMoveRoute from '@/core/hooks/useMoveRoute';

const Room = () => {
  // TODO : rooms/my-join 요청
  // 방 없음 ? 방이 없어요 + 생성/찾기 유도하는 버튼 있는 페이지
  // 방 있음 ? 인증 시간 제일 가까운 방의 id 찾아서 이동시키기
  const id = '123';
  const moveTo = useMoveRoute();
  useEffect(() => {
    moveTo('roomDetail', { roomId: id });
  });
  return null;
};

export default Room;
