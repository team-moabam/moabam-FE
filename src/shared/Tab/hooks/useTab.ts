import React, { useEffect } from 'react';
import { useState } from 'react';
import { childrenToArray } from '../utils/childrenToArray';
import TabItem, { TabItemProps } from '../components/TabItem';
import TabThumnail, { TabThumbnailProps } from '../components/TabThumbnail';

interface useTabProps {
  tabChildren: React.ReactNode;
  defaultIndex: number;
  onChange?: VoidFunction;
  currentIndex?: number;
  setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const useTab = ({
  tabChildren,
  defaultIndex,
  onChange,
  currentIndex,
  setCurrentIndex
}: useTabProps) => {
  const tabItems = childrenToArray<TabItemProps>(tabChildren, TabItem);
  const tabThumnails = childrenToArray<TabThumbnailProps>(
    tabChildren,
    TabThumnail
  );
  const titleOfTabItems = tabItems.map((tabItem) => tabItem.props.title);

  if (defaultIndex >= tabItems.length) {
    throw new Error('wrong initial index');
  }

  const [currentTabIndex, setCurrentTabIndex] = useState(defaultIndex);

  useEffect(() => {
    if (currentIndex !== undefined) {
      setCurrentTabIndex(currentIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    const onSelect = tabItems[currentIndex ?? currentTabIndex].props.onSelect;
    onSelect && onSelect();
    onChange && onChange();
  }, [currentIndex, currentTabIndex, onChange, tabItems]);

  return {
    titleOfTabItems,
    currentTabIndex: currentIndex ?? currentTabIndex,
    setCurrentTabIndex: setCurrentIndex ?? setCurrentTabIndex,
    currentTab: tabItems[currentIndex ?? currentTabIndex],
    currentThumnail: tabThumnails[currentIndex ?? currentTabIndex]
  };
};

export default useTab;
