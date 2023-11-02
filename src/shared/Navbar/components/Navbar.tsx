import { NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi2';
import { ImSearch } from 'react-icons/im';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';

const Navbar = () => {
  const NavbarOptions = [
    {
      icon: <HiHome />,
      route: '/'
    },
    {
      icon: <BiSolidDoorOpen />,
      route: '/room/:roomID'
    },
    {
      icon: <ImSearch />,
      route: '/search'
    },
    {
      icon: <FaUser />,
      route: `/user/`
    }
  ];

  return (
    <nav className="flex h-16 w-full rounded-t-lg bg-light-sub text-2xl text-black dark:bg-dark-sub dark:text-white">
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
