const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema ({
  content: String
})

const journalSchema = new Schema ({
    name: String,
    location: String,
    type:
    {
      type: String,
      enum: ['Sport', 'Boulder', 'Trad', 'Top-Rope']
    },
    grade: String,
    startDate: Date,
    description: String,
    notes: [notesSchema]
})

module.exports = mongoose.model('Journal', journalSchema);