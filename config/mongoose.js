const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BetaBuddy', {
    useNewUrlParser: true,
    useCreateIndex: true  
});

const db = mongoose.connection;

db.on('connected', () => console.log(`${db.name} is connected on ${db.host}`));

db.on('error', (err) => console.log('MongoDB has thrown an error: ', err));


/******* CLEARS DATABASE **********

require('./config/mongoose.js');
var journal = require('./models/journal.js');
journal;
journal.deleteMany({}, function(err, data) { console.log(data) });

*********************************/