const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var climberSchema = new Schema(
    {
        name: String,
        email: String,
        googleId: String,
        journals: [{
            type: Schema.Types.ObjectId,
            ref: 'Journals'
        }]
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('Climber', climberSchema);