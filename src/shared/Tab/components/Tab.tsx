import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTab } from '../hooks';
import TabHeader from './TabHeader';

interface TabProps {
  children: React.ReactNode;
  defaultIndex?: number;
  currentIndex?: number;
  setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>;
  align?: 'center' | 'start' | 'end';
  thumnailStyle?: string;
  itemStyle?: string;
  onChange?: VoidFunction;
}

const Tab = ({
  children,
  defaultIndex = 0,
  align = 'center',
  thumnailStyle = '',
  itemStyle = '',
  currentIndex,
  setCurrentIndex,
  onChange
}: TabProps) => {
  const {
    titleOfTabItems,
    setCurrentTabIndex,
    currentTabIndex,
    currentTab,
    currentThumnail
  } = useTab({
    tabChildren: children,
    defaultIndex,
    currentIndex,
    setCurrentIndex,
    onChange
  });

  return (
    <div className="flex h-full flex-col">
      {currentThumnail && (
        <div className={twMerge('overflow-y-auto', thumnailStyle)}>
          {currentThumnail}
        </div>
      )}
      <TabHeader
        align={align}
        titles={titleOfTabItems}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <div className={twMerge('overflow-y-auto', itemStyle)}>{currentTab}</div>
    </div>
  );
};

export default Tab;
