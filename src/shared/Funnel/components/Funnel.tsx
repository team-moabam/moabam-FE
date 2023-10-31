import React, { isValidElement, PropsWithChildren } from 'react';
import Step from './Step';

interface FunnelProps {
  current: number;
}

const Funnel = ({ current, children }: PropsWithChildren<FunnelProps>) => {
  const filteredChildren = React.Children.toArray(children)
    .filter(isValidElement)
    .filter((child) => child.type === Step);

  return <>{filteredChildren[current]}</>;
};

export default Funnel;
