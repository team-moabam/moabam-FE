interface Bug {
  color: 'text-light-point' | 'text-dark-point' | 'text-warning';
  name: string;
}

export interface Bugs {
  MORNING: Bug;
  NIGHT: Bug;
  GOLDEN: Bug;
}
