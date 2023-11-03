import { useState, useEffect, useRef } from 'react';

const useToast = (time: number) => {
  const [toast, setToast] = useState(false);
  const [show, setShow] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      setToast(false);
      setTimeout(() => setShow(false), 600);
    }, time);

    return () => {
      timeoutId.current && clearTimeout(timeoutId.current);
    };
  }, [toast, time]);

  const changeToastOpen = () => {
    setToast(true);
    setShow(true);
  };

  const changeToastClose = () => {
    setToast(false);
    setTimeout(() => setShow(false), 600);
  };

  return [show, toast, changeToastOpen, changeToastClose] as const;
};

export default useToast;
