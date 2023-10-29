import React from 'react';
import { TabHeader, TabViewer } from './components';
import { useTab } from './hooks/useTab';

interface TabProps {
  children: React.ReactNode;
  defaultIndex?: number;
  align: 'center' | 'start' | 'end';
}

const Tab = ({ children, defaultIndex, align }: TabProps) => {
  const { titleOfTabItems, setCurrentTabIndex, currentTabIndex, currentTab } =
    useTab({
      tabChildren: children,
      defaultIndex
    });

  return (
    <>
      <TabHeader
        align={align}
        titles={titleOfTabItems}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <TabViewer currentTab={currentTab} />
    </>
  );
};

export default Tab;
