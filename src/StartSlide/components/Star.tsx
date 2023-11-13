import '@/StartSlide/styles/star.css';

const getRandomValue = (max: number) => {
  return Math.floor(Math.random() * max);
};

const Star = () => {
  const x = getRandomValue(100);
  const y = getRandomValue(100);
  const size = getRandomValue(3) + 0.5;
  const opacity = getRandomValue(10) * 0.1;
  const duration = getRandomValue(4);

  // const location = `left-[${x}px] top-[${y}px]`;
  // const sizes = `w-[${size}px] h-[${size}px]`;
  // const opacity = `opacity-[${getRandomValue(10) * 0.1}]`;
  // const animation = `animate-[twinkling_${getRandomValue(4) * 0.5}s]`;

  return (
    <div
      className="star"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        opacity,
        animationDuration: `${duration}s`
      }}
    ></div>
  );
};

export default Star;
