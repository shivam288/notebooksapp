import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote, getNotes } from '../api/notesApi';
import Note from '../components/Note';
import NotesList from '../components/NotesList';
import Search from '../components/Search';
import { ReactComponent as Spinner } from '../assets/spinner.svg';
import Popup from '../components/Popup';

const Home = () => {

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentNote, setCurrentNote] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const notes = await getNotes();
      setNotes(notes);
    })();
  }, []);

  const handleNoteClick = id => {
    setCurrentNote(notes.find(x => x.id === id));
  }

  const handleDelete = async () => {
    try {
      await deleteNote(currentNote.id);
      setNotes(notes.filter(x => x.id !== currentNote.id));
      setCurrentNote(null);
      setShowPopup(true);
    }
    catch (ex) {
      setError(true);
      setShowPopup(true);
    }
  }

  const handlePopUpClick = () => {
    setShowPopup(false);
    setError(false);
  }

  return (
    <div className='flex flex-col justify-between px-2 py-4 w-full md:flex-row md:px-32 md:py-14 md:space-x-12 dark:text-white'>
      <div className='md:mt-5 md:w-1/3'>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {notes.length === 0 && <Spinner
          className='w-28 h-28 mx-auto mt-10 md:mt-20 text-gray-200 animate-spin fill-gray-400 dark:fill-gray-600'
        />}
        {notes.length > 0 &&
          <NotesList
            searchText={searchText}
            notes={notes}
            currentNote={currentNote}
            handleNoteClick={handleNoteClick}
          />}
      </div>
      <div className='mt-6 mx-1 md:mt-0 md:w-2/3'>
        {notes.length > 0 && currentNote &&
          <>
            <Note currentNote={currentNote} />
            <div className='flex justify-between px-2 mt-2 w-full'>
              <button
                onClick={() => navigate(`/edit/${currentNote.id}`)}
                className='px-4 py-1 text-lg bg-emerald-800 text-white rounded-xl hover:bg-emerald-700'
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className='px-3 py-1 text-lg bg-red-700 text-white rounded-xl hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          </>}
        {showPopup && !error &&
          <Popup
            text='Succesfully Delete Note'
            buttonText='OK'
            handleClick={handlePopUpClick}
          />}
        {showPopup && error &&
          <Popup
            text='Error! Failed to Delete Note'
            buttonText='OK'
            isError={true}
            handleClick={handlePopUpClick}
          />}
      </div>
    </div>
  );
}

export default Home;