import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTab } from '../hooks';
import TabHeader from './TabHeader';

interface TabProps {
  children: React.ReactNode;
  defaultIndex?: number;
  align?: 'center' | 'start' | 'end';
  thumnailStyle?: string;
  itemStyle?: string;
}

const Tab = ({
  children,
  defaultIndex = 0,
  align = 'center',
  thumnailStyle = '',
  itemStyle = ''
}: TabProps) => {
  const {
    titleOfTabItems,
    setCurrentTabIndex,
    currentTabIndex,
    currentTab,
    currentThumnail
  } = useTab({
    tabChildren: children,
    defaultIndex
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
