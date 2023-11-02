import React, { PropsWithChildren } from 'react';
import { StepNames } from '../types/funnel';
import Step from './Step';

interface FunnelProps<T extends StepNames> {
  current: T[number];
}

const Funnel = <T extends StepNames>({
  current,
  children
}: PropsWithChildren<FunnelProps<T>>) => {
  const validChildren = React.Children.toArray(children)
    .filter<React.ReactElement>(React.isValidElement)
    .filter((child) => child.type === Step);

  const currentStepIndex = validChildren.findIndex(
    (step) => step.props.name === current
  );

  if (currentStepIndex === -1) {
    throw new Error(
      '보여주려는 current 스텝이 Funnel의 children 중에 존재하지 않습니다.'
    );
  }

  return <>{validChildren[currentStepIndex]}</>;
};

Funnel.Step = Step;

export default Funnel;
