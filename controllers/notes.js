const Journal = require('../models/journal');

module.exports = {
    create,
    delete: deleteOne
}

function deleteOne(req,res,next) {
    console.log('delete function');
}

function create(req, res) {
    Journal.findById(req.params.id, function(err, journal) {
        journal.notes.push(req.body);
        journal.save(function(err, journal) {
            res.redirect(`/journals/${journal._id}`)
        })
    })
}