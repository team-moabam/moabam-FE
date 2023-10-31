import { PropsWithChildren } from 'react';

interface StepProps<T extends readonly string[]> {
  name: T[number];
}

const Step = <T extends readonly string[]>({
  children
}: PropsWithChildren<StepProps<T>>) => {
  return <>{children}</>;
};

export default Step;
