import { useState } from 'react';

const useFunnel = <T extends readonly string[]>(
  steps: T,
  initialStep: T[number] = steps[0]
) => {
  const [step, setStep] = useState<T[number]>(initialStep);
  const currentIdx = steps.indexOf(step);

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < steps.length - 1;

  const toPrev = () => {
    if (!hasPrev) return;

    setStep(steps[currentIdx - 1]);
  };

  const toNext = () => {
    if (!hasNext) return;

    setStep(steps[currentIdx + 1]);
  };

  return { step, setStep, hasPrev, toPrev, hasNext, toNext };
};

export default useFunnel;
