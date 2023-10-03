const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required']
  },
  body: {
    type: String,
    required: [true, 'body is required']
  },
  category: {
    type: String,
    required: [true, 'category is required']
  }
}, {
  timestamps: true
});

noteSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  }
});

module.exports = mongoose.model('note', noteSchema);
