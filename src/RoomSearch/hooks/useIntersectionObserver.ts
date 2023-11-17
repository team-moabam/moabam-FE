import { useCallback, useEffect, useRef, useState } from 'react';

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
  const [isIntersecting, setIntersecting] = useState(false);
  const intersectionRef = useRef<HTMLDivElement>(null);

  const handleIntersect: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          onObserve();
          observer.unobserve(entry.target);
        } else {
          setIntersecting(false);
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

  return [intersectionRef, isIntersecting] as const;
};

export default useIntersectionObserver;
