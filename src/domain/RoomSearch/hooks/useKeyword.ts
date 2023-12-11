import { createContext, useContext } from 'react';

export const KeywordContext = createContext('');

const useKeyword = () => useContext(KeywordContext);

export default useKeyword;
