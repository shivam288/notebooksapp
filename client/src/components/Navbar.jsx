import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';
import NavbarButton from './NavbarButton';
import NavLinks from './NavLinks';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Navbar = ({ darkTheme, setDarkTheme }) => {

  const [showNav, setShowNav] = useState(false);

  return (
    <nav className='bg-white border-b border-b-gray-300 px-2 py-3 transition-colors duration-300 dark:bg-gray-900 dark:border-b-gray-600'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <NavLink to='/' className='flex items-center'>
          <Logo className='h-8 mr-2 dark:fill-white' />
          <span className='self-center text-lg font-bold whitespace-nowrap sm:text-xl dark:text-white'>
            Notily
          </span>
        </NavLink>
        <div className='flex items-center ml-auto space-x-3'>
          <DarkModeButton darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <NavbarButton showNav={showNav} setShowNav={setShowNav} />
        </div>
        <div className={`w-full md:block md:w-auto ml-0 md:ml-10 ${showNav ? '' : 'hidden'}`}>
          <NavLinks />
        </div>
      </div>
    </nav >
  );
}

export default Navbar;