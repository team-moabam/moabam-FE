const checkCertifyTime = (certifyTime: number, serverTime: Date) => {
  if (certifyTime === 0) {
    const certifyFistStart = new Date(serverTime);
    certifyFistStart.setHours(0);
    certifyFistStart.setMinutes(0);
    certifyFistStart.setSeconds(0);
    certifyFistStart.setMilliseconds(0);
    const certifyFistEnd = new Date(serverTime);
    certifyFistEnd.setHours(0);
    certifyFistEnd.setMinutes(10);
    certifyFistEnd.setSeconds(0);
    certifyFistEnd.setMilliseconds(0);
    const certifySecondStart = new Date(serverTime);
    certifySecondStart.setHours(23);
    certifySecondStart.setMinutes(50);
    certifySecondStart.setSeconds(0);
    certifySecondStart.setMilliseconds(0);
    const certifySecondEnd = new Date(serverTime);
    certifySecondEnd.setHours(23);
    certifySecondEnd.setMinutes(59);
    certifySecondEnd.setSeconds(59);
    certifySecondEnd.setMilliseconds(59);

    if (
      certifyFistStart.getTime() <= serverTime.getTime() &&
      certifyFistEnd.getTime() > serverTime.getTime()
    ) {
      return true;
    } else if (
      certifySecondStart.getTime() < serverTime.getTime() &&
      certifySecondStart.getTime() >= serverTime.getTime()
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    const certifyStart = new Date(serverTime);
    certifyStart.setHours(certifyTime - 1);
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
  }
};

export default checkCertifyTime;
