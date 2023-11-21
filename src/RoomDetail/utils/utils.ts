export const makeWeekCalendar = (serverTime: Date) => {
  const weekArray: Date[] = Array.from({ length: 7 });

  const todayDate = serverTime.getDate();
  const todayDay = serverTime.getDay();

  for (let i = 0; i < 7; i++) {
    const mondayDate = todayDate - todayDay + 1;
    const newDate = new Date(serverTime);

    newDate.setFullYear(newDate.getFullYear());
    newDate.setMonth(newDate.getMonth());
    newDate.setDate(mondayDate + i);

    weekArray[i] = newDate;
  }

  return { thisWeekTimestamp: weekArray };
};
