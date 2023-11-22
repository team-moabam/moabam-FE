const getTimeRange = (date: Date): 'morning' | 'night' => {
  const hour = date.getHours();
  return hour >= 4 && hour < 16 ? 'morning' : 'night';
};

export default getTimeRange;
