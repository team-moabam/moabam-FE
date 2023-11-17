import { MyBirdContext } from '@/contexts/myBirdContext';

interface MyBirdProviderProps {
  children: React.ReactNode;
}

const MyBirdProvider = ({ children }: MyBirdProviderProps) => {
  return <MyBirdContext.Provider value={{}}>{children}</MyBirdContext.Provider>;
};

export default MyBirdProvider;
