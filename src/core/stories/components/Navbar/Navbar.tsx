import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { HiViewGridAdd } from 'react-icons/hi';
import { ImSearch } from 'react-icons/im';
import { FaUser } from 'react-icons/fa6';

interface NavbarProps {
  location?: '/' | '/room' | '/search' | '/my';
}

const NavbarOptions = [
  {
    icon: <GoHomeFill />,
    route: '/'
  },
  {
    icon: <HiViewGridAdd />,
    route: '/room'
  },
  {
    icon: <ImSearch />,
    route: '/search'
  },
  {
    icon: <FaUser />,
    route: '/my'
  }
];

const Navbar = ({ location = '/' }: NavbarProps) => {
  return (
    <div className="fixed bottom-0 flex h-16 w-full max-w-lg rounded-t-lg bg-light-sub text-3xl text-black dark:bg-dark-sub dark:text-white">
      {NavbarOptions.map(({ icon, route }) => (
        <Link
          className={`grid h-full grow place-items-center transition-all hover:text-light-point dark:hover:text-dark-point ${
            location === route && 'text-light-point dark:text-dark-point'
          }`}
          to={route}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
