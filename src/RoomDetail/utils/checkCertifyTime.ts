const checkCertifyTime = (certifyTime: number, serverTime: Date) => {
  const certifyStart = new Date(serverTime);
  certifyStart.setHours(certifyTime);
  certifyStart.setMinutes(0);
  certifyStart.setSeconds(0);
  certifyStart.setMilliseconds(0);
  const certifyEnd = new Date(serverTime);
  certifyEnd.setHours(certifyTime);
  certifyEnd.setMinutes(10);
  certifyEnd.setSeconds(0);
  certifyEnd.setMilliseconds(0);

  if (
    certifyStart.getTime() <= serverTime.getTime() &&
    serverTime.getTime() < certifyEnd.getTime()
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkCertifyTime;
