const getDateDiff = (d1: string, d2: string) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
};

export default getDateDiff;
