import React from 'react';
import { clsx } from 'clsx';

interface ItemWithContents {
  contents: string;
  completed?: boolean;
  className?: string;
}
interface ItemWithChildren {
  children: React.ReactNode;
  completed?: boolean;
  className?: string;
}
type RoutineItemProps = ItemWithContents | ItemWithChildren;

const isItemWithContents = (item: RoutineItemProps): item is ItemWithContents =>
  'contents' in item;

const RoutineItem = (item: RoutineItemProps) => {
  return (
    <div className="flex items-center justify-start gap-3">
      <div
        className={clsx('h-4 w-4 rounded-full', {
          'bg-light-point dark:bg-dark-point': item.completed,
          'bg-dark-gray': !item.completed
        })}
      />
      <div className="font-IMHyemin-regular text-sm">
        {isItemWithContents(item) ? item.contents : item.children}
      </div>
    </div>
  );
};

export default RoutineItem;
