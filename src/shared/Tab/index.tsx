import React from 'react';
import { TabHeader, TabViewer } from './components';
import { useTab } from './hooks/useTab';

interface TabProps {
  children: React.ReactNode;
}

const Tab = ({ children }: TabProps) => {
  const { titleOfTabItems, setCurrentTabIndex, currentTabTitle, currentTab } =
    useTab({
      tabChildren: children
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
