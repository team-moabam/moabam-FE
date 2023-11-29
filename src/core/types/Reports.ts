export type Report = {
  reportedId: number;
  memberId: number;
  roomId?: string | null;
  certificationId?: string | null;
  description?: string | null;
};
