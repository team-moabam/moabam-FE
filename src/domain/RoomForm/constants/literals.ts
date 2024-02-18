import { RoomInfo } from '@/core/types/Room';

export const FORM_LITERAL = {
  /** 방 종류 */
  roomType: {
    value: ['MORNING', 'NIGHT'],
    message: '방 종류를 선택해주세요.'
  },
  /** 루틴 목록 */
  routines: {
    min: {
      value: 0
    },
    max: {
      value: 4,
      message: '루틴은 최대 4개까지 등록할 수 있어요.'
    },
    item: {
      min: {
        value: 2,
        message: '루틴 내용은 2글자 이상이어야 해요.'
      },
      max: {
        value: 20,
        message: '루틴 내용은 20글자 이하로 입력해주세요.'
      }
    }
  },
  /** 방 제목 */
  title: {
    min: {
      value: 1,
      message: '방 제목은 1글자 이상이어야 해요.'
    },
    max: {
      value: 20,
      message: '방 제목은 20글자 이하로 입력해주세요.'
    }
  },
  /** 방에 참여할 수 있는 인원 수 */
  userCount: {
    min: {
      value: 1,
      message: '인원을 1명 이상 선택해주세요.'
    },
    max: {
      value: 10,
      message: '인원을 10명 이하로 선택해주세요.'
    }
  },
  /** 방 비밀번호 */
  password: {
    min: {
      value: 4,
      message: '비밀번호는 4자리 이상이어야 해요.'
    },
    max: {
      value: 8,
      message: '비밀번호는 8자리 이하로 입력해주세요.'
    },
    onlyNumeric: {
      message: '비밀번호는 숫자로만 입력해주세요.'
    }
  },
  /** 공지사항 */
  announcement: {
    min: {
      value: 0
    },
    max: {
      value: 100,
      message: '공지사항은 100글자 이하로 입력해주세요.'
    }
  }
} as const;

/** 새 종류 및 이미지 */
export const BIRD: Record<
  RoomInfo['roomType'],
  {
    name: string;
    image: string;
    bg: string;
  }
> = {
  MORNING: {
    name: '오목눈이',
    image: '/assets/skins/defaultOmok.png',
    bg: 'bg-yellow-50'
  },
  NIGHT: {
    name: '부엉이',
    image: '/assets/skins/awakeOwlSkin0.png',
    bg: 'bg-violet-50'
  }
} as const;

/** 새 종류 별 선택할 수 있는 인증 시간 범위 */
export const TIME_RANGE: Record<RoomInfo['roomType'], [number, number]> = {
  MORNING: [4, 10],
  NIGHT: [20, 26]
};

/** 참여할 수 있는 최대 방 수 */
export const MAX_ROOM_COUNT = 3;
