import { useTheme } from '@/core/hooks';
import Background from '@/StartSlide/components/Background';
import UserInfo from '@/StartSlide/components/UserInfo';

const StartPage = () => {
  // TODO : 임시 시간대 설정 코드입니다. 수정 예정!
  const { theme } = useTheme();
  const dayType = theme === 'light' ? 'morning' : 'night';

  return (
    <div>
      <Background type={dayType} />
      <UserInfo type={dayType} />
    </div>
  );
};

export default StartPage;
