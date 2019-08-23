const Journal = require('../models/journal');

module.exports = {
    index,
    new: newJournal,
    create,
    show,
    addProject
};

function addProject(req, res) {
    Journal.findById(req.params.id, function(err, journal) {
        journal.projects.push(req.body);
        console.log('journal data', journal);
        journal.save(function(err, journal) {
            res.redirect(`/journals/${journal._id}`)
        })
    })
}


function show(req, res, next) {
    Journal.findById(req.params.id, function(err, journal) {
        res.render(`journals/show`, {
            title: `${journal.name}`,
            journal
        });
    })
}

function create(req, res, next) {
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    Journal.create(req.body, function(err, journal) {
        console.log(journal);
        res.redirect('/journals');
    });
}

function newJournal(req, res, next) {
    res.render('journals/new');
}

function index(req, res, next) {
    Journal.find({}, function(err, journals) {
    res.render('journals/index', { journals })});
}
