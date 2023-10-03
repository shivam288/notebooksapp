import { useState } from 'react';
import { ReactComponent as Sun } from '../assets/sun.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';

const DarkModeButton = ({ darkTheme, setDarkTheme }) => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setDarkTheme(!darkTheme);
  }

  return (
    <>
      <button
        type='button'
        className='bg-gray-700 flex rounded-2xl py-1 px-2 hover:bg-gray-600'
        onClick={handleToggle}
      >
        <Moon className='w-5 h-5 mr-1 fill-sky-100' />
        <Sun className='w-5 h-5 ml-1 fill-yellow-300' />
        <div className={`bg-white w-5 h-5 rounded-full transition-all absolute ${toggle ? '' : 'ml-7'}`}>
        </div>
      </button>
    </>
  );
}

export default DarkModeButton;