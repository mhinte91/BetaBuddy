const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BetaBuddy', {
    useNewUrlParser: true,
    useCreateIndex: true  
});

const db = mongoose.connection;

db.on('connected', () => console.log(`${db.name} is connected on ${db.host}`));

db.on('error', (err) => console.log('MongoDB has thrown an erro: ', err));