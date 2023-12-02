const getDateDiff = (d1: string, d2: string) => {
  const date1 = new Date(d1);
  date1.setHours(0, 0, 0, 0);
  const date2 = new Date(d2);
  date2.setHours(0, 0, 0, 0);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};

export default getDateDiff;
