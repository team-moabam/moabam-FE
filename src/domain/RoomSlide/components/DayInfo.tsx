import React from 'react';
import { DAY_TYPE } from '../constants/dayType';

interface DayInfoProps {
  dayType: 'MORNING' | 'NIGHT';
}

const DayInfo = ({ dayType }: DayInfoProps) => {
  const { TITLE, START, END } = DAY_TYPE[dayType];

  return (
    <div className="flex w-fit items-end gap-3">
      <div className="font-IMHyemin-bold text-xl">{TITLE}</div>
      <div className="text-sm text-dark-gray">
        {START} ~ {END}시
      </div>
    </div>
  );
};

export default DayInfo;
