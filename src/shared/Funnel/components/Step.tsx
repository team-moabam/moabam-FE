import { PropsWithChildren } from 'react';

interface StepProps<Steps extends readonly string[]> {
  name: Steps[number];
  children?: React.ReactNode;
}

const Step = <Steps extends readonly string[]>({
  children
}: PropsWithChildren<StepProps<Steps>>) => {
  return <>{children}</>;
};

export default Step;
