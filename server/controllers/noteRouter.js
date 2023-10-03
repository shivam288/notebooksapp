const noteRouter = require('express').Router();
const Note = require('../models/note');

noteRouter.get('/', async (req, res) => {
  const notes = await Note.find({});
  res.json(notes)
});

noteRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.json(note);
  }
  catch (error) {
    res.status(404).send();
  }
});

noteRouter.post('/', async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const result = await newNote.save()
    res.status(201).json(result);
  }
  catch (error) {
    res.status(400).json(error);
  }
});

noteRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Note.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.status(204).send();
  }
  catch (error) {
    switch (error.name) {
      case "ValidationError":
        res.status(400).json(error);
        break;
      case "CastError":
        res.status(404).send();
        break;
    }
  }
});

noteRouter.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Note.findByIdAndRemove(id);
    res.status(204).send();
  }
  catch (error) {
    res.status(404).send();
  }
});

module.exports = noteRouter;
