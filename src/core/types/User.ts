export interface User {
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

export interface MyUser {
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
