export const MY_BUGS = {
  morningBug: 4,
  nightBug: 3,
  goldenBug: 100
};

export const bugsArray: {
  type: 'morningBug' | 'nightBug' | 'goldenBug';
  color: string;
}[] = [
  {
    type: 'morningBug',
    color: 'text-light-point'
  },
  {
    type: 'nightBug',
    color: 'text-dark-point'
  },
  {
    type: 'goldenBug',
    color: 'text-warning'
  }
];
