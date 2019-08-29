const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema ({
  note: String
})


const journalSchema = new Schema ({
    name: String,
    location: String,
    type: {
      type: String,
      enum: ['Sport', 'Boulder', 'Trad', 'Top-Rope']
    },
    grade: String,
    startDate: Date,
    description: String,
    notes: [notesSchema]
})




// const Schema = new Schema ({
//     name: String,
//     location: String,
//     description: String,
//     projects: [projectSchema]
// }, {timestamps:true} );

module.exports = mongoose.model('Journal', journalSchema);