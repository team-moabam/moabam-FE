import { PropsWithChildren } from 'react';

interface StepProps<T> {
  name: T;
}

const Step = <T extends string>({
  children,
  name
}: PropsWithChildren<StepProps<T>>) => {
  return <>{children}</>;
};

export default Step;
