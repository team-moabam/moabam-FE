import { PropsWithChildren } from 'react';
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Input from '../Input/Input';

interface PasswordInputProps {
  size?: 'sm' | 'base' | 'lg';
  className?: string;
}

const PasswordInput = ({
  size = 'base',
  className = '',
  ...props
}: PropsWithChildren<PasswordInputProps>) => {
  const [hide, setHide] = useState(true);

  return (
    <div className="relative">
      <Input
        size={size}
        className={className}
        type={hide ? 'password' : 'text'}
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
};

export default PasswordInput;
