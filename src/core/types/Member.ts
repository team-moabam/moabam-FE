export type Member = {
  memberId: string;
  nickname: string;
  profileImage: string;
  contributionPoint: number;
  awakeImage: string;
  sleepImage: string;
  certificationImage: { routineId: number; image: string }[];
};
