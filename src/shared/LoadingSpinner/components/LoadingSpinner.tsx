import { twMerge } from 'tailwind-merge';

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl'
};

interface LoadingSpinnerProps {
  size?: keyof typeof sizeMap;
  colorStyle?: string;
  borderStyle?: string;
}

const LoadingSpinner = ({
  size = 'md',
  colorStyle = 'text-white',
  borderStyle = 'border-2'
}: LoadingSpinnerProps) => {
  return (
    <div
      className={twMerge(
        sizeMap[size],
        colorStyle,
        borderStyle,
        'w-[1em] h-[1em] animate-spin rounded-full border-solid border-current border-t-transparent'
      )}
    />
  );
};

export default LoadingSpinner;
