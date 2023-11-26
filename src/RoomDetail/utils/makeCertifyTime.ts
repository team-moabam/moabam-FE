import {
  CERTIFICATE_END_MICROSECONDS,
  CERTIFICATE_END_SECONDS,
  CERTIFICATE_END_MINUTES,
  CERTIFICATE_START_MINUTES,
  CERTIFICATE_START_SECONDS,
  CERTIFICATE_START_MICROSECONDS
} from '../constants/constant';

const makeCertifyTime = (certifyTime: number, serverTime: Date) => {
  const certificateStartTimeDate = new Date(serverTime);
  certificateStartTimeDate.setHours(certifyTime - 1);
  certificateStartTimeDate.setMinutes(CERTIFICATE_START_MINUTES);
  certificateStartTimeDate.setSeconds(CERTIFICATE_START_SECONDS);
  certificateStartTimeDate.setMilliseconds(CERTIFICATE_START_MICROSECONDS);

  const certificateEndTimeDate = new Date(serverTime);
  certificateEndTimeDate.setHours(certifyTime);
  certificateEndTimeDate.setMinutes(CERTIFICATE_END_MINUTES);
  certificateEndTimeDate.setSeconds(CERTIFICATE_END_SECONDS);
  certificateEndTimeDate.setMilliseconds(CERTIFICATE_END_MICROSECONDS);

  const nowTime = serverTime.getTime();
  const certificateStartTime = certificateStartTimeDate.getTime();
  const certificateEndTime = certificateEndTimeDate.getTime();

  return {
    nowTime,
    certificateEndTime,
    certificateEndTimeDate,
    certificateStartTime,
    certificateStartTimeDate
  } as const;
};

export default makeCertifyTime;
