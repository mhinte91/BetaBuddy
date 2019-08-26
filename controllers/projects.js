const Journal = require('../models/journal');

module.exports = {
    new: newProj,
    show,
    newNote
};


function newNote(req, res, next) {
    Journal.findOne({'projects._id': req.params.id}, (err, journal) =>
    {if (err) throw err;
        var elem = journal.projects.map(function (x) {
            return x.id;
        }).indexOf(req.params.id);
        var proj = journal.projects[elem];
        proj.notes.push(req.body);
        journal.save( function(err) {
            res.render(`projects/show`, {journal, proj})
            console.log(proj)

        })
    })
}



function show(req, res, next) {
    Journal.findOne({'projects._id': req.params.id}, (err, journal) =>
    {if (err) throw err;
        var elem = journal.projects.map(function (x) {
            return x.id;
        }).indexOf(req.params.id);
        var proj = journal.projects[elem];
    res.render('projects/show', {journal, proj})}
     )
}


function newProj(req, res) {
    Journal.findById(req.params.id, (err, journal) => {
        res.render('projects/new', { journal });
    })
}


// function show(req, res, next) {
    
//     Journal.findOne({'projects._id': req.params.id}, function(err, journal) {
        
//         let id = req.params.id
//         res.render(`projects/show`, { journal, id});
//     })
// }