import { PropsWithChildren } from 'react';
import { StepNames } from '../types/funnel';

interface StepProps<T extends StepNames> {
  name: T[number];
}

const Step = <T extends StepNames>({
  children
}: PropsWithChildren<StepProps<T>>) => {
  return <>{children}</>;
};

export default Step;
