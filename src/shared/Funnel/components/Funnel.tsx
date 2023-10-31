import React, { PropsWithChildren } from 'react';
import Step from './Step';

interface FunnelProps<T extends readonly string[]> {
  current: T[number];
}

const Funnel = <T extends readonly string[]>({
  current,
  children
}: PropsWithChildren<FunnelProps<T>>) => {
  const filteredChildren = React.Children.toArray(children)
    .filter<React.ReactElement>(React.isValidElement)
    .filter((child) => child.type === Step);

  const currentStepIndex = filteredChildren.findIndex(
    (step) => step.props.name === current
  );

  if (currentStepIndex === -1) {
    throw new Error('퍼널 스텝 리스트에 현재 스텝이 없습니다.');
  }

  return <>{filteredChildren[currentStepIndex]}</>;
};

Funnel.Step = Step;

export default Funnel;
