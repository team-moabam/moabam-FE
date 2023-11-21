import { useState, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
  });

  const saveState = useCallback(
    (value: SetStateAction<T>) => {
      try {
        const valueToStore = value instanceof Function ? value(state) : value;
        setState(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.error(err);
      }
    },
    [key, state]
  );

  return [state, saveState];
};

export default useLocalStorage;
