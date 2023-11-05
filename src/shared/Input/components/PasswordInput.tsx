import { useState, forwardRef } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Input from './Input';
import { InputProps } from './Input';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [hide, setHide] = useState(true);

    return (
      <div className="relative">
        <Input
          type={hide ? 'password' : 'text'}
          ref={ref}
          {...props}
        />
        <div
          className="
            absolute 
            inset-y-0 
            right-5 
            grid 
            place-content-center 
            text-xl text-gray-300 
            transition-all 
            hover:text-gray-400"
          onClick={() => setHide(!hide)}
        >
          {hide ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
