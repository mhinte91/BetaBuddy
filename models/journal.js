const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    name: String,
    location: String,
    description: String,
    entries: Number
}, {timestamps:true} );

module.exports = mongoose.model('Journal', journalSchema);