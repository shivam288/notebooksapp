const Input = ({ label, value, setValue }) => {
  return (
    <>
      <label
        className='font-medium md:text-lg'
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className='border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:bg-white md:w-80 dark:bg-gray-800 dark:border-gray-900 dark:focus:bg-gray-700 dark:focus:outline-none dark:focus:outline-blue-800'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default Input;