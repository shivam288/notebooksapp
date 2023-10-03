import { NavLink } from 'react-router-dom';

const navlinks = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Add Note',
    link: '/add'
  },
  {
    title: 'About',
    link: '/about'
  }
];

const NavLinks = () => {
  return (
    <ul className='flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:font-medium dark:text-white'>
      {navlinks.map(navlink => (
        <li key={navlink.title}>
          <NavLink
            to={navlink.link}
            className={({ isActive }) => `block py-1 px-2 text-lg rounded-xl dark:hover:text-white ${isActive ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
          >
            {navlink.title}
          </NavLink>
        </li>
      ))}
      <li>
        <a
          href='https://github.com/RupeshGhosh10/notebook-app'
          className='block py-1 px-2 text-lg rounded-xl dark:hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        >
          Github
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;