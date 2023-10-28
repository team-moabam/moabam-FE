import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { HiViewGridAdd } from 'react-icons/hi';
import { ImSearch } from 'react-icons/im';
import { FaUser } from 'react-icons/fa6';

const Navbar = () => {
  const { pathname } = useLocation();
  const userID = '1234'; //상태에 있을 유저 정보 가져올 예정

  const NavbarOptions = [
    {
      icon: <GoHomeFill />,
      route: '/'
    },
    {
      icon: <HiViewGridAdd />,
      route: '/room' // 이거 정의 어떻게 하죠
    },
    {
      icon: <ImSearch />,
      route: '/search'
    },
    {
      icon: <FaUser />,
      route: `/my/${userID}`
    }
  ];
  return (
    <>
      {NavbarOptions.find(({ route }) => route === pathname) && (
        <nav className="fixed bottom-0 flex h-16 w-full max-w-lg rounded-t-lg bg-light-sub text-3xl text-black dark:bg-dark-sub dark:text-white">
          {NavbarOptions.map(({ icon, route }) => (
            <Link
              className={`grid h-full grow place-items-center transition-all hover:text-light-point dark:hover:text-dark-point ${
                pathname === route && 'text-light-point dark:text-dark-point'
              }`}
              to={route}
              key={route}
            >
              {icon}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
