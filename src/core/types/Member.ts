export type Member = {
  memberId: number;
  nickname: string;
  profileImage: string;
  isNotificationSent: boolean;
  contributionPoint: number;
  awakeImage: string;
  sleepImage: string;
  certificationImage: { routineId: number; image: string }[];
};

export interface RankMember extends Member {
  rank: number;
}

export interface RankMemberSemi {
  rank: number;
  memberId: number;
  nickname: string;
  awakeImage: string;
  sleepImage: string;
}

export interface MemberInfo {
  nickname: string;
  intro: string;
  level: number;
  exp: number;
  birds: {
    MORNING: string;
    NIGHT: string;
  };
  badges: {
    name: string;
    unlock: boolean;
  }[];
  profileImage: string | undefined;
  goldenBug?: number;
  morningBug?: number;
  nightBug?: number;
}

export interface MyInfo {
  nickname: string;
  intro: string;
  level: number;
  exp: number;
  birds: {
    MORNING: string;
    NIGHT: string;
  };
  badges: {
    name: string;
    unlock: boolean;
  }[];
  profileImage: string | undefined;
  goldenBug: number;
  morningBug: number;
  nightBug: number;
}
