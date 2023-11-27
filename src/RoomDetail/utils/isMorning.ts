const isMorning = (serverTime: Date) => {
  const morningEndTime = new Date(serverTime);
  morningEndTime.setHours(16);
  morningEndTime.setMinutes(0);
  morningEndTime.setSeconds(0);
  morningEndTime.setMilliseconds(0);

  const morningStartTime = new Date(serverTime);
  morningStartTime.setHours(4);
  morningStartTime.setMinutes(0);
  morningStartTime.setSeconds(0);
  morningStartTime.setMilliseconds(0);

  if (
    serverTime.getTime() >= morningEndTime.getTime() ||
    morningStartTime.getTime() > serverTime.getTime()
  ) {
    return true;
  }
};

export default isMorning;
