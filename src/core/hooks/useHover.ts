import { useState, useRef, useEffect } from 'react';

const useHover = <T extends HTMLElement>() => {
  const [hovered, setHovered] = useState(false);
  const hoverRef = useRef<T>(null);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    const target = hoverRef.current;
    if (target) {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (target) {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return [hoverRef, hovered] as const;
};

export default useHover;
