import React from 'react';
import { TabHeader, TabViewer } from './components';
import { useTab } from './hooks/useTab';

interface TabProps {
  children: React.ReactNode;
  defaultIndex?: number;
}

const Tab = ({ children, defaultIndex }: TabProps) => {
  const { titleOfTabItems, setCurrentTabIndex, currentTabTitle, currentTab } =
    useTab({
      tabChildren: children,
      defaultIndex
    });

  return (
    <>
      <TabHeader
        titles={titleOfTabItems}
        currentTabTitle={currentTabTitle}
        setCurrentTab={setCurrentTabIndex}
      />
      <TabViewer currentTab={currentTab} />
    </>
  );
};

export default Tab;
