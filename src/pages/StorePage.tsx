import { Header } from '@/shared/Header';
import StoreList from '@/StoreList/components/StoreList';

const StorePage = () => {
  return (
    <div className="h-full overflow-auto ">
      <Header
        prev="myPage"
        title="상점"
        className="sticky top-0 bg-light-main dark:bg-dark-main"
      />
      <StoreList />
    </div>
  );
};

export default StorePage;
