import { useState } from 'react';
import Input from './Input';
import TextAreaInput from './TextAreaInput';

const NoteForm = ({ handleSubmit, note = null }) => {

  const [title, setTitle] = useState(note?.title ?? '');
  const [category, setCategory] = useState(note?.category ?? '');
  const [body, setBody] = useState(note?.body ?? '');

  const handleClear = e => {
    e.preventDefault();
    setBody('');
    setCategory('');
    setTitle('');
  }

  return (
    <div className='px-5 py-4 md:px-14 md:py-12 flex items-center justify-center dark:text-white'>
      <form
        className='w-full md:w-auto'
        onSubmit={(e) => handleSubmit(e, { title, category, body })}
      >
        <div className='flex flex-col justify-start mb-1 md:mb-5 md:flex-row md:space-x-16'>
          <div className='flex flex-col'>
            <Input
              label='Title'
              value={title}
              setValue={setTitle}
            />
          </div>
          <div className='flex flex-col mt-1 md:mt-0'>
            <Input
              label='Category'
              value={category}
              setValue={setCategory}
            />
          </div>
        </div>
        <div className='flex flex-col justify-start mb-1 md:mb-5 md:flex-row md:space-x-16'>
          <TextAreaInput body={body} setBody={setBody} />
        </div>
        <div className='flex justify-evenly mt-2'>
          <button
            className='px-5 py-1 text-lg bg-emerald-800 text-white rounded-xl hover:bg-emerald-700'
            type='submit'
          >
            {note ? 'Update' : 'Add'}
          </button>
          <button
            className='px-5 py-1 text-lg bg-red-700 text-white rounded-xl hover:bg-red-600'
            type='reset'
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;