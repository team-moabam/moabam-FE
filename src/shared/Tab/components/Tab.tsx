import React from 'react';
import { TabHeader } from '.';
import { useTab } from '../hooks';

interface TabProps {
  children: React.ReactNode;
  defaultIndex?: number;
  align?: 'center' | 'start' | 'end';
}

const Tab = ({ children, defaultIndex = 0, align = 'center' }: TabProps) => {
  const { titleOfTabItems, setCurrentTabIndex, currentTabIndex, currentTab } =
    useTab({
      tabChildren: children,
      defaultIndex
    });

  return (
    <div className="flex h-full flex-col">
      <TabHeader
        align={align}
        titles={titleOfTabItems}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <div className="h-full overflow-y-auto">{currentTab}</div>
    </div>
  );
};

export default Tab;
