import { ReactComponent as Bars } from '../assets/bars.svg';

const NavbarButton = ({ showNav, setShowNav }) => {
  return (
    <button
      type='button'
      className='py-2 px-3 text-sm text-gray-500 rounded-lg scale-110 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      onClick={() => setShowNav(!showNav)}
    >
      <Bars className='h-6 fill-gray-800 dark:fill-gray-300' />
    </button>
  );
}

export default NavbarButton;