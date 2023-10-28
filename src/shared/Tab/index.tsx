import React from 'react';
import { useState } from 'react';
import { childrenToArray } from './utils/childrenToArray';
import TabItem, { TabItemProps } from './components/TabItem';

interface TabProps {
  children: React.ReactNode;
}

const Tab = ({ children }: TabProps) => {
  const tabItems = childrenToArray<TabItemProps>(children, TabItem);
  const titleOfTabItems = tabItems.map((tabItem) => tabItem.props.title);
  const getCurrentTab = () =>
    tabItems.find((tabItem) => tabItem.props.title === currentTitle);

  const [currentTitle, setCurrentTitle] = useState(titleOfTabItems[0]);

  const TabHeader = ({ titles }: { titles: string[] }) => {
    return titles.map((title) => (
      <div onClick={() => setCurrentTitle(title)}>{title}</div>
    ));
  };

  const TabViewer = ({ currentTab }: { currentTab: React.ReactElement }) => {
    return <>{currentTab}</>;
  };

  return (
    <>
      <TabHeader titles={titleOfTabItems} />
      <TabViewer currentTab={getCurrentTab() || <div>none</div>} />
    </>
  );
};

export default Tab;

// TabHeader 에서 title 에 해당하는거 클릭 시 해당 title 을 가진거 보여줌.
