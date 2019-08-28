const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    name: String,
    type: {
      type: String,
      enum: ['Sport', 'Boulder', 'Trad', 'Top-Rope']
    },
    grade: String,
    startDate: Date,
    endDate: Date,
    description: String,
    notes: []
})

const journalSchema = new Schema ({
    name: String,
    location: String,
    description: String,
    projects: [projectSchema]
}, {timestamps:true} );

module.exports = mongoose.model('Journal', journalSchema);