const Journal = require('../models/journal');

module.exports = {
    create,
    delete: deleteOne
}

function deleteOne(req,res,next) {
    console.log('delete function');
}

function create(req, res, next) {
    Journal.findOne({'projects._id': req.params.id}, (err, journal) =>
    {if (err) throw err;
        var elem = journal.projects.map(function (x) {
            return x.id;
        }).indexOf(req.params.id);
        proj = journal.projects[elem];
        proj.notes.push(req.body.notes.toString())
        journal.save( function(err) {
            res.redirect(`${req.params.id}`)
        })
    })
}