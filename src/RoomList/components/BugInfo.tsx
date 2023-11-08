import React from 'react';
import { Icon } from '@/shared/Icon';

interface BugInfoProps {
  bug: number;
}

const BugInfo = ({ bug }: BugInfoProps) => {
  return bug > 0 ? (
    <div className="flex items-center justify-end gap-2 px-3 text-light-point dark:text-dark-point">
      <Icon icon="BiSolidBugAlt" />
      <div className="font-IMHyemin-bold">{`+${bug}`}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default BugInfo;
