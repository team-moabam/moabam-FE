export const makeWeekCalendar = (serverTime: Date) => {
  const weekArray: Date[] = Array.from({ length: 7 });

  const todayDate = serverTime.getDate();
  const todayDay = serverTime.getDay();

  let mondayDate;

  if (todayDay === 0) {
    mondayDate = todayDate - 6;
  } else {
    mondayDate = todayDate - todayDay + 1;
  }

  for (let i = 0; i < 7; i++) {
    const newDate = new Date(serverTime);
    newDate.setDate(mondayDate + i);
    weekArray[i] = newDate;
  }

  return { thisWeekDateObjectArray: weekArray };
};
