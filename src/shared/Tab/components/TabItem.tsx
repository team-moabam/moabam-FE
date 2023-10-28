import React from 'react';

export interface TabItemProps {
  title: string;
  children: React.ReactNode;
}

const TabItem = ({ title, children }: TabItemProps) => {
  if (!title) {
    throw new Error('TabItem must have title');
  }
  return children;
};

export default TabItem;
