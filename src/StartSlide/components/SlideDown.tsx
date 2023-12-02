import React, { useState, useRef, useEffect } from 'react';

interface SlideDownProps {
  children: React.ReactNode;
  className?: string;
  fullPercentage?: number;
  onSlideDown?: VoidFunction;
}

const SlideDown = ({
  children,
  className = '',
  fullPercentage = 100,
  onSlideDown
}: SlideDownProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [currentY, setCurrentY] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && startY !== null && slideRef.current) {
      const movedY = e.clientY - startY;
      const fullHeight = slideRef.current.parentElement?.clientHeight || 0;
      setCurrentY((movedY / fullHeight) * 100);
    }
  };
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setStartY(null);
      setCurrentY((prev) => (prev > 40 ? fullPercentage : 0));
    }
  };

  useEffect(() => {
    if (currentY === fullPercentage) {
      const timeoutId = setTimeout(() => {
        onSlideDown && onSlideDown();
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [currentY, fullPercentage, isDragging, onSlideDown]);

  return (
    <div
      ref={slideRef}
      style={{
        transform: `translateY(${
          currentY > fullPercentage ? fullPercentage : currentY
        }%)`,
        transition: isDragging ? 'none' : 'transform 0.3s'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={className}
    >
      {children}
    </div>
  );
};

export default SlideDown;
