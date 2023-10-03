import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../api/notesApi';
import NoteForm from '../components/NoteForm';
import Popup from '../components/Popup';

const Add = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    try {
      await addNote(data);
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
      <NoteForm
        handleSubmit={handleSubmit}
      />
      {showPopup && !error &&
        <Popup
          text='Succesfully Added Note'
          buttonText='OK'
          handleClick={handleSuccessClick}
        />}
      {showPopup && error &&
        <Popup
          text='Error! Failed to Add Note'
          buttonText='OK'
          isError={true}
          handleClick={handleFailureClick}
        />}
    </>
  );
}

export default Add;