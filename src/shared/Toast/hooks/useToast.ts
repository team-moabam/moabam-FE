import { useState, useEffect } from 'react';

const useToast = (initialState: boolean) => {
  const [toast, setToast] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toast) setToast(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  const changeToastOpen = () => {
    setToast(true);
  };

  const changeToastClose = () => {
    setToast(false);
  };

  return [toast, changeToastOpen, changeToastClose] as const;
};

export default useToast;
