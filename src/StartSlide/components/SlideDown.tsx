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
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.changedTouches[0].pageY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && startY !== null && slideRef.current) {
      const movedY = e.clientY - startY;
      const fullHeight = slideRef.current.parentElement?.clientHeight || 0;
      setCurrentY((movedY / fullHeight) * 100);
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && startY !== null && slideRef.current) {
      const movedY = e.changedTouches[0].pageY - startY;
      const fullHeight = slideRef.current.parentElement?.clientHeight || 0;
      setCurrentY((movedY / fullHeight) * 100);
    }
  };

  const handleSlideEnd = () => {
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
      onMouseUp={handleSlideEnd}
      onMouseLeave={handleSlideEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleSlideEnd}
      onTouchCancel={handleSlideEnd}
      className={className}
    >
      {children}
    </div>
  );
};

export default SlideDown;
