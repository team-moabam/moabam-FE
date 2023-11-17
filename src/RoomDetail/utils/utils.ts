export const makeDays = () => {
  const weekArray: Date[] = Array.from({ length: 7 });
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const todayDay = today.getDay();

  for (let i = 0; i < 7; i++) {
    const monDate = todayDate - todayDay + 1;
    const date = monDate + i;

    weekArray[i] = new Date(todayYear, todayMonth, date);
  }

  return { thisWeekDays: weekArray, today: today };
};
