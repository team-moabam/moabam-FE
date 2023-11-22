import React from 'react';
import { Icon } from '@/shared/Icon';

interface BugInfoProps {
  bug: number;
}

const BugInfo = ({ bug }: BugInfoProps) => {
  return bug > 0 ? (
    <div className="flex items-center justify-end pr-1 text-light-point dark:text-dark-point">
      <Icon icon="BiSolidBugAlt" />
      <div className="pt-[0.2rem] font-IMHyemin-bold text-sm">{`+${bug}`}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default BugInfo;
