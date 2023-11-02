import React from 'react';

export const childrenToArray = <T>(
  children: React.ReactNode,
  Component: React.ComponentType<T>
): React.ReactElement<T>[] => {
  return React.Children.toArray(children).filter(
    (child): child is React.ReactElement<T> =>
      React.isValidElement(child) && child.type === Component
  );
};
