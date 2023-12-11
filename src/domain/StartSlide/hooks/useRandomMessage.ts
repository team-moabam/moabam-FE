import { useState, useRef, useEffect } from 'react';
import getRandomValue from '@/domain/StartSlide/utils/getRandomValue';
import { CONTENTS } from '@/domain/StartSlide/constants/contents';

const maxMessageIndex = CONTENTS.MESSAGES.length;

const useRandomMessage = () => {
  const [show, setShow] = useState(false);
  const [messageIndex, setMessageIndex] = useState(
    getRandomValue(maxMessageIndex)
  );
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setMessageIndex(-1);
      setShow(false);
    }, 2000);

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [show]);

  const changeMessage = () => {
    setShow(true);
    setMessageIndex(getRandomValue(maxMessageIndex));
  };

  return { message: CONTENTS.MESSAGES[messageIndex], show, changeMessage };
};

export default useRandomMessage;
