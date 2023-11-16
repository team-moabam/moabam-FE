export interface Room {
  id: number;
  title: string;
  managerNickname: string;
  level: number;
  roomType: 'MORNING' | 'NIGHT';
  certifyTime: number;
  currentUserCount: number;
  maxUserCount: number;
  routine: {
    routineId: number;
    content: string;
  }[];
}
