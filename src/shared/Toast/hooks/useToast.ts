import { useState, useEffect } from 'react';

const useToast = (initialState: boolean, time: number) => {
  const [toast, setToast] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toast) setToast(false);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [toast, time]);

  const changeToastOpen = () => {
    setToast(true);
  };

  const changeToastClose = () => {
    setToast(false);
  };

  return [toast, changeToastOpen, changeToastClose] as const;
};

export default useToast;
