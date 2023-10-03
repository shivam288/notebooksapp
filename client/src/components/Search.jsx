import { ReactComponent as SearchIcon } from '../assets/search.svg'

const Search = ({ searchText, setSearchText }) => {
  return (
    <div className='flex w-full'>
      <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>Search</label>
      <div className='relative w-full'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <SearchIcon className='w-5 h-5 fill-gray-400 dark:fill-gray-600' />
        </div>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type='search'
          className='border w-full border-gray-300 rounded-md p-2.5 pl-10 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:border-gray-900 dark:focus:bg-gray-700 dark:focus:outline-none dark:focus:outline-blue-800'
          placeholder='Search...'
        />
      </div>
    </div>
  );
}

export default Search;