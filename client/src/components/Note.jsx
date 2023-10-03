import Preview from './Preview';

const Note = ({ currentNote }) => {
  return (
    <>
      <div className='flex flex-col justify-between px-1 w-full mb-3'>
        <h2 className='text-xl md:text-2xl font-medium'>{currentNote.title}</h2>
        <p
          className='text-lg md:text-xl mt-1'
        >
          {currentNote.category} - {(new Date(currentNote.updatedAt)).toLocaleString()}
        </p>
      </div>
      <div className='max-w-full'>
        <Preview body={currentNote.body} />
      </div>
    </>
  );
}

export default Note;