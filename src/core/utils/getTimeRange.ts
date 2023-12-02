const getTimeRange = (date: Date | number): 'MORNING' | 'NIGHT' => {
  if (typeof date === 'number')
    return date >= 4 && date < 16 ? 'MORNING' : 'NIGHT';

  const hour = date.getHours();
  return hour >= 4 && hour < 16 ? 'MORNING' : 'NIGHT';
};

export default getTimeRange;
