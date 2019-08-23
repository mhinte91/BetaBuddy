const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var climberSchema = new Schema(
    {
        name: String,
        email: String,
        googleId: String
    }, 
    {timestamps: true});


module.exports = mongoose.model('Climber', climberSchema);