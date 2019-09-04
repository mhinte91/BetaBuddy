const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        name: String,
        email: String,
        googleId: String,
        journals: [{
            type: Schema.Types.ObjectId,
            ref: 'Journal'
        }]
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);