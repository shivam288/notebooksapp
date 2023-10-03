const NotesList = ({ notes, searchText, currentNote, handleNoteClick }) => {
  return (
    <div className='flex flex-col mt-3 md:mt-6'>
      <h2 className='font-semibold text-lg md:text-xl'>All Notes</h2>
      <ul>
        {notes.length > 0 &&
          notes
            .filter(x => x.category.toLowerCase().includes(searchText.toLowerCase()) || x.title.toLowerCase().includes(searchText.toLowerCase()))
            .map(note => (
              <li key={note.id}>
                <button
                  onClick={() => handleNoteClick(note.id)}
                  className={`text-left py-2 px-2.5 my-1 w-full rounded-md border border-gray-700 md:my-2 ${currentNote?.id === note.id ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
                >
                  {note.title}
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default NotesList;