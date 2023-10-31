import { useState } from 'react';

const useFunnel = (steps: React.ReactNode[], initialStep: number) => {
  const [currentStep, setCurrentStep] = useState(
    initialStep < 0
      ? 0
      : initialStep > steps.length - 1
      ? steps.length - 1
      : initialStep
  );

  const toPrevStep = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep(currentStep - 1);
  };

  const toNextStep = () => {
    if (currentStep === steps.length - 1) {
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  return { steps, currentStep, toPrevStep, toNextStep };
};

export default useFunnel;
