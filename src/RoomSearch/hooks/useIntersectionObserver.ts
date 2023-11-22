import { useCallback, useEffect, useRef } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  onObserve: VoidFunction;
}

const useIntersectionObserver = ({
  onObserve,
  ...options
}: ObserverOptions) => {
  const intersectionRef = useRef<HTMLDivElement>(null);

  const handleIntersect: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onObserve();
        }
      });
    },
    [onObserve]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    const intersectionElement = intersectionRef.current;

    intersectionElement && observer.observe(intersectionElement);

    return () => {
      intersectionElement && observer.unobserve(intersectionElement);
    };
  }, [handleIntersect, options]);

  return intersectionRef;
};

export default useIntersectionObserver;
