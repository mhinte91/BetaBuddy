const Journal = require('../models/journal');

module.exports = {
    new: newProj,
};


function newProj(req, res) {
    Journal.findById(req.params.id, (err, journal) => {
        console.log(journal)
        res.render('projects/new', { journal });
    })
}