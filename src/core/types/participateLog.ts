export interface ParticipateLogType {
  roomId: number | null;
  title: string;
  createdAt: string;
  deletedAt: null | string;
}

export interface ParticipateHistoryType {
  roomHistory: ParticipateLogType[];
}
