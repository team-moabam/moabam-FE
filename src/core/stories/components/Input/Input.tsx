import { PropsWithChildren } from 'react';

interface InputProps {
  size?: 'sm' | 'base' | 'lg';
  className?: string;
  type?: string;
  name?: string;
}

const Input = ({
  size = 'base',
  className = '',
  type = 'text',
  name = '',
  ...props
}: PropsWithChildren<InputProps>) => (
  <input
    type={type}
    className={`
      w-full
      rounded-lg 
      border 
      border-gray-300 
      p-3
      shadow-sm 
      placeholder:text-gray-400
      focus:border-light-point
      focus:outline-none
      focus:ring-1 
      focus:ring-light-point
      dark:focus:border-dark-point
      dark:focus:ring-dark-point 
      ${className} 
      ${sizeVariants[size]}
      `}
    name={name}
    {...props}
  />
);

export default Input;

const sizeVariants = {
  sm: 'h-10 text-xs',
  base: 'h-12 text-sm ',
  lg: 'h-14 text-base '
};
