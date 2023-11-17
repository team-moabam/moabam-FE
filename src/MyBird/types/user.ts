export interface UserType {
  nickname: string;
  intro: string;
  level: number;
  exp: number;
  birds: {
    MORNING_SKIN: string;
    NIGHT_SKIN: string;
  };
  badges: { [key in BadgeType]: boolean };
  participants_count: number;
  coupons_count: number;
}

type BadgeType =
  | '오목눈이_탄생'
  | '어른_오목눈이'
  | '어른_부엉이'
  | '부엉이_탄생';
