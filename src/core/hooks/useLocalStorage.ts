import { useState, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

/**
 * 상태를 로컬 스토리지와 동기화하는 커스텀 훅
 * @param key 로컬 스토리지에 저장할 키 이름
 * @param initialValue 상태의 기본 값
 * @returns [state, setState]
 */
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
