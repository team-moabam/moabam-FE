export interface ParticipateHistory {
  roomHistory: {
    roomId: number | null;
    title: string;
    createdAt: string;
    deletedAt: null | string;
  }[];
}
