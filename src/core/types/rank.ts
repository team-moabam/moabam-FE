export interface Rank {
  rank: number;
  memberId: number;
  score: number;
  nickname: string;
  image: string;
}

export interface Ranking {
  topRankings: Rank[];
  myRanking: Rank;
}
