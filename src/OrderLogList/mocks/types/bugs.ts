interface Bug {
  color: 'text-light-point' | 'text-dark-point' | 'text-warning';
  name: string;
}

export interface Bugs {
  MORNING_BUG: Bug;
  NIGHT_BUG: Bug;
  GOLDEN_BUG: Bug;
}
