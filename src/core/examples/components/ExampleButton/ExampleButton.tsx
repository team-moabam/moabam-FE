import { PropsWithChildren } from 'react';

interface TestButtonProps {
  bg: 'blue' | 'red' | 'green';
  p?: 2 | 4 | 8 | 16;
}

const TestButton = ({
  bg,
  p = 2,
  children
}: PropsWithChildren<TestButtonProps>) => {
  return (
    <button className={`${bgVariants[bg]} ${pVariants[p]} rounded`}>
      {p} {children}
    </button>
  );
};

export default TestButton;

const bgVariants = {
  blue: 'bg-blue-300',
  red: 'bg-red-300',
  green: 'bg-green-300'
};

const pVariants = {
  2: 'p-2',
  4: 'p-4',
  8: 'p-8',
  16: 'p-16'
};
