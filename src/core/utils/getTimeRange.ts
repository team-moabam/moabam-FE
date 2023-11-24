const getTimeRange = (date: Date): 'MORNING' | 'NIGHT' => {
  const hour = date.getHours();
  return hour >= 4 && hour < 16 ? 'MORNING' : 'NIGHT';
};

export default getTimeRange;
