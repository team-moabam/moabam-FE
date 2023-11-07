import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Input from './Input';
import { InputProps } from './Input';

interface InnerTextInputProps extends InputProps {
  text?: string;
  wrapperStyle?: string;
  textStyle?: string;
}

const InnerTextInput = forwardRef<HTMLInputElement, InnerTextInputProps>(
  ({ text, wrapperStyle, textStyle, ...props }, ref) => {
    return (
      <div className={twMerge('relative', wrapperStyle)}>
        <Input
          ref={ref}
          {...props}
        />
        <div
          className={twMerge(
            'absolute inset-y-0 right-5 grid place-content-center text-xs text-gray-400',
            textStyle
          )}
        >
          {text}
        </div>
      </div>
    );
  }
);

InnerTextInput.displayName = 'InnerTextInput';

export default InnerTextInput;
