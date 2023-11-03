import { useState, forwardRef } from 'react';
import Input from './Input';
import { InputProps } from './Input';

interface InnerTextInputProps extends InputProps {
  text?: string;
  textStyle?: string;
}

const InnerTextInput = forwardRef<HTMLInputElement, InnerTextInputProps>(
  ({ text, textStyle, ...props }, ref) => {
    const [hide, setHide] = useState(true);

    return (
      <div className="relative">
        <Input
          ref={ref}
          {...props}
        />
        <div
          className={`
            absolute 
            inset-y-0 
            right-5 
            grid 
            place-content-center
            ${textStyle}
          `}
          onClick={() => setHide(!hide)}
        >
          {text}
        </div>
      </div>
    );
  }
);

InnerTextInput.displayName = 'InnerTextInput';

export default InnerTextInput;
