import { useState } from 'react';

const useFunnel = (steps: readonly string[]) => {
  const [current, setCurrent] = useState(0);

  const hasPrev = current > 0;
  const hasNext = current < steps.length - 1;

  const toPrev = () => {
    if (!hasPrev) return;

    setCurrent(current - 1);
  };

  const toNext = () => {
    if (!hasNext) return;

    setCurrent(current + 1);
  };

  return { current, hasPrev, hasNext, toPrev, toNext };
};

export default useFunnel;
