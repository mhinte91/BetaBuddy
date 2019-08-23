const Journal = require('../models/journal');

module.exports = {
    index,
    new: newJournal,
    create
};

function create(req, res, next) {
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    Journal.create(req.body, function(err, journal) {
        console.log(journal);
        res.redirect('/journals');
    });
}

function index(req, res, next) {
    Journal.find({}, function(err, journals) {
    res.render('journals/index', { journals })});
}

function newJournal(req, res, next) {
    res.render('journals/new');
}