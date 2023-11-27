const checkCertifyTime = ({
  nowTime,
  certificateTodayEndTime,
  certificateTodayStartTime
}: {
  nowTime: number;
  certificateTodayEndTime: number;
  certificateTodayStartTime: number;
}) => {
  if (nowTime < certificateTodayStartTime) {
    return 'beforeTodayCertifyTime';
  } else if (
    nowTime < certificateTodayEndTime &&
    nowTime >= certificateTodayStartTime
  ) {
    return 'nowTodayCertifyTime';
  } else {
    return 'afterTodayCertifyTime';
  }
};

export default checkCertifyTime;
