import { useMemo } from 'react';
import { debounce } from '@/core/utils/debounce';
import { Input } from '@/shared/Input';

interface SearchBarProps {
  onSearch: (input: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleDebouncedSearch = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
      }, 500),
    [onSearch]
  );

  return (
    <div>
      <Input
        className="rounded-2xl pl-4 dark:bg-dark-sub"
        placeholder="방 제목, 루틴 등을 써보세요"
        onChange={handleDebouncedSearch}
      />
    </div>
  );
};

export default SearchBar;
