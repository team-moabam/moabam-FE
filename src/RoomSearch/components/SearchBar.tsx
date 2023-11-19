import useDebounceSearch from '../hooks/useDebounceSearch';
import { Input } from '@/shared/Input';

interface SearchBarProps {
  onSearch: (input: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const debounceSearch = useDebounceSearch({
    debounce: 500,
    onSearch
  });
  return (
    <div>
      <Input
        className="rounded-2xl pl-4 dark:bg-dark-sub"
        placeholder="방 제목, 루틴 등을 써보세요"
        onChange={(e) => debounceSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
