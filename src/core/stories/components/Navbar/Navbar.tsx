import { NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi2';
import { ImSearch } from 'react-icons/im';
import { FaUser, FaClipboardList } from 'react-icons/fa6';

const Navbar = () => {
  const userID = '1234'; //상태에 있을 유저 정보 가져올 예정

  const NavbarOptions = [
    {
      icon: <HiHome />,
      route: '/'
    },
    {
      icon: <FaClipboardList />,
      route: '/room' // 이거 정의 어떻게 하죠
    },
    {
      icon: <ImSearch />,
      route: '/search'
    },
    {
      icon: <FaUser />,
      route: `/user/${userID}`
    }
  ];

  return (
    <nav className="fixed bottom-0 mt-12 flex h-16 w-full max-w-md rounded-t-lg bg-light-sub text-2xl text-black dark:bg-dark-sub dark:text-white">
      {NavbarOptions.map(({ icon, route }) => (
        <NavLink
          to={route}
          key={route}
          className={({ isActive }) =>
            'grid h-full grow place-items-center transition-all hover:text-light-point dark:hover:text-dark-point ' +
            (isActive && 'text-light-point dark:text-dark-point')
          }
        >
          {icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
