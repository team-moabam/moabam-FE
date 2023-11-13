import React from 'react';
import { Input } from '@/shared/Input';

interface SearchBarProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ keyword, setKeyword }: SearchBarProps) => {
  return (
    <div>
      <Input
        className="rounded-2xl pl-4 dark:bg-dark-sub"
        placeholder="방 제목, 루틴 등을 써보세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
