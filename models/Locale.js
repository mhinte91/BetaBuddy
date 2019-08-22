const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localeSchema = new Schema ({
    name: {},
    location: {},
    description: {},
    entries: {}
});

mongoose.model('Locale', localeSchema);