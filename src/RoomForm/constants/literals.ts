// 새 종류 별 방 타입
import { RoomInfo } from '@/core/types/Room';

export const ROOM_TYPES = ['MORNING', 'NIGHT'] as const;

// 새 종류 및 이미지
export const BIRD: Record<
  RoomInfo['roomType'],
  {
    name: string;
    image: string;
  }
> = {
  MORNING: {
    name: '오목눈이',
    image: '/assets/Omok.png'
  },
  NIGHT: {
    name: '부엉이',
    image: '/assets/Owl.png'
  }
} as const;

// 새 종류 별 선택할 수 있는 인증 시간 범위
export const TIME_RANGE: Record<RoomInfo['roomType'], [number, number]> = {
  MORNING: [4, 10],
  NIGHT: [20, 26]
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

// 공지사항 길이
export const ANNOUNCEMENT = {
  min: 0,
  max: 100
};

// 폼 유효성 검사 메시지
export const FORM_MESSAGE = {
  ANNOUNCEMENT: `공지사항은 ${ANNOUNCEMENT.min}글자에서 ${ANNOUNCEMENT.max}글자 사이여야 해요.`,
  ROUTINE_NAME: `루틴 내용은 ${ROUTINE_NAME.min}글자에서 ${ROUTINE_NAME.max}글자 사이여야 해요.`,
  ROOM_NAME: `방 제목은 ${ROOM_NAME.min}글자에서 ${ROOM_NAME.max}글자 사이여야 해요.`,
  USER_COUNT: `인원을 올바르게 선택해주세요.`,
  PASSWORD: `비밀번호는 ${PASSWORD.min}자리에서 ${PASSWORD.max}자리의 숫자여야 해요.`,
  ONLY_NUMERIC_PASSWORD: `비밀번호는 숫자로만 입력해주세요.`
};
