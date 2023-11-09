// 새 종류 별 방 타입
export const ROOM_TYPES = ['morning', 'night'] as const;

// 새 종류 및 이미지
export const BIRD: Record<
  RoomType,
  {
    name: string;
    image: string;
  }
> = {
  morning: {
    name: '오목눈이',
    image: '/assets/Omok.png'
  },
  night: {
    name: '부엉이',
    image: '/assets/Owl.png'
  }
} as const;

// 새 종류 별 선택할 수 있는 인증 시간 범위
export const TIME_RANGE: Record<RoomType, [number, number]> = {
  morning: [4, 10],
  night: [20, 26]
};

// 등록할 수 있는 최대 루틴 수
export const ROUTINE_COUNT = {
  max: 4
};

// 루틴 이름 길이
export const ROUTINE_NAME = {
  min: 2,
  max: 20
};

// 방 제목 길이
export const ROOM_NAME = {
  min: 1,
  max: 10
};

// 비밀번호 길이
export const PASSWORD = {
  min: 4,
  max: 8
};

// 참여자 수
export const USER_COUNT = {
  min: 1,
  max: 10
};

// 새 종류 별 방 타입
export type RoomType = (typeof ROOM_TYPES)[number];
