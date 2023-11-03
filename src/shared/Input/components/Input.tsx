import { forwardRef } from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'base' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'base', className, ...props }, ref) => {
    return (
      <input
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
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;

const sizeVariants = {
  sm: 'h-10 text-xs',
  base: 'h-12 text-sm ',
  lg: 'h-14 text-base '
};
