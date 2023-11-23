export type Member = {
  memberId: string;
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

export interface MemberInfo {
  nickname: string;
  intro: string;
  level: number;
  exp: number;
  birds: {
    MORNING_SKIN: string;
    NIGHT_SKIN: string;
  };
  badges: {
    name: string;
    unlock: boolean;
  }[];
  profileImage: string | undefined;
  golden_bug?: number;
  morning_bug?: number;
  night_bug?: number;
}

export interface MyInfo {
  nickname: string;
  intro: string;
  level: number;
  exp: number;
  birds: {
    MORNING_SKIN: string;
    NIGHT_SKIN: string;
  };
  badges: {
    name: string;
    unlock: boolean;
  }[];
  profileImage: string | undefined;
  golden_bug: number;
  morning_bug: number;
  night_bug: number;
}
