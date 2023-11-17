import MyBirdProvider from '@/MyBird/components/MyBirdProvider';
import { Header } from '@/shared/Header';
import HeaderWallet from '@/MyBird/components/HeaderWallet';
import MyBirdTaps from '@/MyBird/components/MyBirdTaps';

const MyBirdPage = () => {
  return (
    <MyBirdProvider>
      <Header
        prev="user"
        className="absolute z-10 text-white"
      >
        <HeaderWallet />
      </Header>
      <MyBirdTaps />
    </MyBirdProvider>
  );
};

export default MyBirdPage;
