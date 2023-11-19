import { useState, useEffect } from 'react';

const useDebounceSearch = ({
  debounce,
  onSearch
}: {
  debounce: number;
  onSearch: (input: string) => void;
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, debounce);

    return () => clearTimeout(timer);
  }, [debounce, inputValue, onSearch]);

  return setInputValue;
};

export default useDebounceSearch;
