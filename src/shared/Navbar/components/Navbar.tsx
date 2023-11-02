import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi2';
import { ImSearch } from 'react-icons/im';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath = '' }: NavbarProps) => {
  const NavbarOptions = [
    {
      icon: <HiHome />,
      route: '/',
      activeRoutes: ['/']
    },
    {
      icon: <BiSolidDoorOpen />,
      route: '/room',
      activeRoutes: ['/room', '/room/:roomId']
    },
    {
      icon: <ImSearch />,
      route: '/search',
      activeRoutes: ['/search']
    },
    {
      icon: <FaUser />,
      route: `/user`,
      activeRoutes: ['/user', '/user/:userId']
    }
  ];

  return (
    <nav className="flex h-16 w-full rounded-t-lg bg-light-sub text-2xl text-black dark:bg-dark-sub dark:text-white">
      {NavbarOptions.map(({ icon, route, activeRoutes }) => (
        <Link
          to={route}
          key={route}
          className={`grid h-full grow place-items-center transition-all hover:text-light-point dark:hover:text-dark-point ${
            activeRoutes.some((Route) => Route === currentPath) &&
            'text-light-point dark:text-dark-point'
          } `}
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
