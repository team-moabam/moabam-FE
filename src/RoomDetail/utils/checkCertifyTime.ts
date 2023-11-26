const checkCertifyTime = ({
  nowTime,
  certificateEndTime,
  certificateStartTime
}: {
  nowTime: number;
  certificateEndTime: number;
  certificateStartTime: number;
}) => {
  if (nowTime < certificateStartTime) {
    return 'beforeCertifyTime';
  } else if (nowTime < certificateEndTime && nowTime >= certificateStartTime) {
    return 'nowCertifyTime';
  } else {
    return 'afterCertifyTime';
  }
};

export default checkCertifyTime;
