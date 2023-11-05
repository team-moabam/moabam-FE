/**
 * 정수형 hour를 00 : 00 형태의 string으로 변환합니다.
 * 24이상의 hour는 24로 나눈 나머지로 계산됩니다.
 * @param hour
 */
export const formatHourString = (hour: number): string => {
  return `${(hour % 24).toString().padStart(2, '0')} : 00`;
};
