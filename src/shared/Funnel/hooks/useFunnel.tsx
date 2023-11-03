import { useState } from 'react';
import { StepNames } from '../types/funnel';

export interface FunnelHook {
  current: string;
  hasPrev: boolean;
  hasNext: boolean;
  toPrev: () => void;
  toNext: () => void;
}

const useFunnel = <T extends StepNames>(
  steps: T,
  initialStep: T[number] = steps[0]
): FunnelHook => {
  const [current, setCurrent] = useState<T[number]>(initialStep);
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
