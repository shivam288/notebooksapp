import { useState } from 'react';
import Preview from './Preview';

const TextAreaInput = ({ body, setBody }) => {

  const [showPreview, setShowPreview] = useState(false);

  const handleNoteClick = e => {
    e.preventDefault();
    setShowPreview(false);
  }

  const handlePreviewClick = e => {
    e.preventDefault();
    setShowPreview(true);
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex space-x-2 mb-2'>
        <button
          className={`font-medium md:text-lg rounded-xl px-4 py-1 ${!showPreview ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
          onClick={handleNoteClick}
        >
          Note
        </button>
        <button
          className={`font-medium md:text-lg rounded-xl px-4 py-1 ${showPreview ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
          onClick={handlePreviewClick}
        >
          Preview
        </button>
      </div>
      {!showPreview &&
        <textarea
          className='border border-gray-300 bg-gray-50 focus:bg-white rounded-md h-96 p-3 dark:bg-gray-800 dark:border-gray-900 dark:focus:bg-gray-700 dark:focus:outline-none dark:focus:outline-blue-800'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>}
      {showPreview && <Preview body={body} />}
    </div>
  );
}

export default TextAreaInput;