const Journal = require('../models/journal');

module.exports = {
    index,
    new: newJournal,
};

function index(req, res, next) {
    res.render('journals/index')
}

function newJournal(req, res, next) {
    res.render('journals/new');
}