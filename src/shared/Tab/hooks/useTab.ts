import React from 'react';
import { useState } from 'react';
import { childrenToArray } from '../utils/childrenToArray';
import TabItem, { TabItemProps } from '../components/TabItem';

interface useTabProps {
  tabChildren: React.ReactNode;
  initialTabIndex?: number;
}

export const useTab = ({ tabChildren, initialTabIndex = 0 }: useTabProps) => {
  const tabItems = childrenToArray<TabItemProps>(tabChildren, TabItem);
  const titleOfTabItems = tabItems.map((tabItem) => tabItem.props.title);

  if (initialTabIndex >= tabItems.length) {
    throw new Error('wrong initial index');
  }

  const [currentTabIndex, setCurrentTabIndex] = useState(initialTabIndex);

  return {
    titleOfTabItems,
    setCurrentTabIndex,
    currentTabTitle: tabItems[currentTabIndex].props.title,
    currentTab: tabItems[currentTabIndex]
  };
};
