const Journal = require('../models/journal');

module.exports = {
    new: newProj,
    show,
    delete: deleteProj,
    create,
    edit
   
};

var proj;

function edit(req, res) {
    Journal.findById(req.params.id, (err, journal) => {
        res.render('projects/edit', { journal });
    })
}


function create(req, res) {
    Journal.findById(req.params.id, function(err, journal) {
        journal.projects.push(req.body);
        journal.save(function(err, journal) {
            res.redirect(`/journals/${journal._id}`)
        })
    })
}

function deleteProj(req, res) {
    Journal.findOne({'projects._id': req.params.id}, (err, journal) =>
    {
        var index;
        journal.projects.some(function(entry, i) {
            if (entry._id == req.params.id) {
                index = i;
                return true;
            }
        });
        journal.projects.splice(index, 1);
        journal.save( (err) =>{
        res.render(`journals/show`, {
            title: `${journal.name}`,
            journal
        });})
    })}


  



function show(req, res, next) {
    Journal.findOne({'projects._id': req.params.id}, (err, journal) =>
    {if (err) throw err;
        var elem = journal.projects.map(function (x) {
            return x.id;
        }).indexOf(req.params.id);
        proj = journal.projects[elem];
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