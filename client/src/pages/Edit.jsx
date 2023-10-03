import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, updateNote } from '../api/notesApi';
import NoteForm from '../components/NoteForm';
import Popup from '../components/Popup';

const Edit = () => {

  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      (async () => {
        const note = await getNote(id);
        setNote(note);
      })();
    }
  }, [id]);

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    try {
      await updateNote(id, data);
      setShowPopup(true);
    }
    catch {
      setError(true);
      setShowPopup(true);
    }
  }

  const handleSuccessClick = () => {
    navigate('/')
  }

  const handleFailureClick = () => {
    setShowPopup(false);
    setError(false);
  }

  return (
    <>
      {note &&
        <NoteForm
          note={note}
          handleSubmit={handleSubmit}
        />}
      {showPopup && !error &&
        <Popup
          text='Succesfully Updated Note'
          buttonText='OK'
          handleClick={handleSuccessClick}
        />}
      {showPopup && error &&
        <Popup
          text='Error! Failed to Update Note'
          buttonText='OK'
          isError={true}
          handleClick={handleFailureClick}
        />}
    </>
  );
}

export default Edit;