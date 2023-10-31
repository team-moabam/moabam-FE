import React, { PropsWithChildren } from 'react';
import Step from './Step';

interface FunnelProps<Steps extends readonly string[]> {
  steps: Steps;
  current: Steps[number];
}

const Funnel = <Steps extends readonly string[]>({
  children
}: PropsWithChildren<FunnelProps<Steps>>) => {
  const filteredChildren = React.Children.toArray(children)
    .filter(React.isValidElement)
    .filter((child) => child.type === Step);

  return <>{filteredChildren}</>;
};

Funnel.Step = Step;

export default Funnel;
