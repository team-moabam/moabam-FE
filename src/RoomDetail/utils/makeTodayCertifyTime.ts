import {
  CERTIFICATE_END_MICROSECONDS,
  CERTIFICATE_END_SECONDS,
  CERTIFICATE_END_MINUTES,
  CERTIFICATE_START_MINUTES,
  CERTIFICATE_START_SECONDS,
  CERTIFICATE_START_MICROSECONDS
} from '../constants/constant';

const makeTodayCertifyTime = (certifyTime: number, serverTime: Date) => {
  const certificateTodayStartTimeDate = new Date(serverTime);
  certificateTodayStartTimeDate.setHours(certifyTime - 1);
  certificateTodayStartTimeDate.setMinutes(CERTIFICATE_START_MINUTES);
  certificateTodayStartTimeDate.setSeconds(CERTIFICATE_START_SECONDS);
  certificateTodayStartTimeDate.setMilliseconds(CERTIFICATE_START_MICROSECONDS);

  const certificateTodayEndTimeDate = new Date(serverTime);
  certificateTodayEndTimeDate.setHours(certifyTime);
  certificateTodayEndTimeDate.setMinutes(CERTIFICATE_END_MINUTES);
  certificateTodayEndTimeDate.setSeconds(CERTIFICATE_END_SECONDS);
  certificateTodayEndTimeDate.setMilliseconds(CERTIFICATE_END_MICROSECONDS);

  const nowTime = serverTime.getTime();
  const certificateTodayStartTime = certificateTodayStartTimeDate.getTime();
  const certificateTodayEndTime = certificateTodayEndTimeDate.getTime();

  return {
    nowTime,
    certificateTodayEndTime,
    certificateTodayEndTimeDate,
    certificateTodayStartTime,
    certificateTodayStartTimeDate
  } as const;
};

export default makeTodayCertifyTime;
