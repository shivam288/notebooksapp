const Popup = ({ text, buttonText, handleClick, isError = false }) => {
  return (
    <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center mt-52 md:mt-0 md:inset-0 md:h-full'>
      <div className='fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity'></div>
      <div className='relative w-full max-w-md h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow p-6 text-center dark:bg-gray-700'>
          <h3 className='mb-5 text-2xl font-semibold dark:text-white'>{text}</h3>
          <button
            onClick={handleClick}
            type='button'
            className={`px-5 py-1 mt-3 text-lg text-white rounded-xl ${isError ? 'bg-red-700 hover:bg-red-600' : 'bg-emerald-800 hover:bg-emerald-700'}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;