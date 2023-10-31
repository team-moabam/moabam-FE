import { useState } from 'react';

const useFunnel = <T extends readonly string[]>(steps: T) => {
  const [current, setCurrent] = useState<T[number]>(steps[0]);
  const currentIdx = steps.indexOf(current);

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < steps.length - 1;

  const toPrev = () => {
    if (!hasPrev) return;

    setCurrent(steps[currentIdx - 1]);
  };

  const toNext = () => {
    if (!hasNext) return;

    setCurrent(steps[currentIdx + 1]);
  };

  return { current, hasPrev, hasNext, toPrev, toNext };
};

export default useFunnel;
