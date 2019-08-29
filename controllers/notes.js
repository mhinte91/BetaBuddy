const Journal = require('../models/journal');

module.exports = {
    create,
    delete: deleteOne
}

function deleteOne(req, res) {
    Journal.findOne({'notes._id': req.params.id}, (err, journal) =>
    {
        var index;
        journal.notes.some(function(entry, i) {
            if (entry._id == req.params.id) {
                index = i;
                return true;
            }
        });
        journal.notes.splice(index, 1);
        journal.save( (err) =>{
        res.render(`journals/show`, {
            title: `${journal.name}`,
            journal
        });})
    })}

function create(req, res) {
    Journal.findById(req.params.id, function(err, journal) {
        console.log(req.body)
        journal.notes.push(req.body);
        journal.save(function(err, journal) {
            res.redirect(`/journals/${journal._id}`)
        })
    })
}