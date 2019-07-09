const mongoose = require('mongoose');

const affirmationSchema = new mongoose.Schema({
  title: String,
  statement: String,
  type: String,
  archive: Boolean,
  dueDate: Date,
  userId: String
});

affirmationSchema.set('timestamps', true);

module.exports = mongoose.model(
  'Affirmation',
  affirmationSchema,
  'affirmation'
);
