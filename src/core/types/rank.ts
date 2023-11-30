export interface rank {
  rank: number;
  memberId: number;
  score: number;
  nickname: string;
  image: string;
}

export interface ranking {
  topRankings: rank[];
  myRanking: rank;
}
