export const makeDays = () => {
  const weekArray: Date[] = Array.from({ length: 7 });
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const todayDay = today.getDay();

  for (let i = 0; i < 7; i++) {
    const mondayDate = todayDate - todayDay + 1;
    const date = mondayDate + i;

    weekArray[i] = new Date(todayYear, todayMonth, date);
  }

  return { thisWeekDates: weekArray, today: today };
};
