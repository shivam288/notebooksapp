const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const noteRouter = require('./controllers/noteRouter');
const errorHandler = require('./middleware/errorhandle');

const app = express();

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log('connected to mongoDB');
  })
  .catch(error => {
    console.error('error connecting to mongoDB:', error.message);
  });

app.use(express.static('build'));
app.use(cors());
app.use(express.json());
app.use('/api/notes', noteRouter);
app.use(errorHandler);

module.exports = app;
