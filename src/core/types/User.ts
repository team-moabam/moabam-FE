export interface userType {
  nickname: string;
  intro: string;
  level: number;
  exp: number;
  birds: {
    MORNING_SKIN: string;
    NIGHT_SKIN: string;
  };
  badges: {
    오목눈이_탄생: boolean;
    어른_오목눈이: boolean;
    어른_부엉이: boolean;
    부엉이_탄생: boolean;
  };
  img: string | undefined;
  participants_count?: number;
  coupons_count?: number;
}
