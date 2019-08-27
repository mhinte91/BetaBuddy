const Journal = require('../models/journal');

module.exports = {
    index,
    new: newJournal,
    create,
    show,
    addProject,
    delJournal,
    
    
};



function delJournal(req, res, next) {
    Journal.deleteOne({ _id: req.params.id}, (err) => {
        Journal.find({}, function(err, journals) {
            res.render('journals/index', { journals })});
    })
    }


function addProject(req, res) {
    Journal.findById(req.params.id, function(err, journal) {
        journal.projects.push(req.body);
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
