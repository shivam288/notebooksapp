import axios from 'axios';

const url = process.env.REACT_APP_API_URI ?? 'http://localhost:3001/api/notes';

export const getNotes = async () => {
  const res = await axios.get(url);
  return res.data;
}

export const getNote = async id => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
}

export const addNote = async data => {
  const res = await axios.post(url, data);
  return res.data;
}

export const updateNote = async (id, data) => {
  const res = await axios.put(`${url}/${id}`, data);
  return res.data;
}

export const deleteNote = async id => {
  const res = await axios.delete(`${url}/${id}`);
  return res.data;
}
