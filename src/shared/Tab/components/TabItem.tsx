import React from 'react';

export interface TabItemProps {
  title: string;
  onSelect?: VoidFunction;
  children: React.ReactNode;
}

const TabItem = ({ title, onSelect, children }: TabItemProps) => {
  title;
  onSelect;
  return children;
};

export default TabItem;
