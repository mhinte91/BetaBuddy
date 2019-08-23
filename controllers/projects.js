const Journal = require('../models/journal');

module.exports = {
    new: newProj,
};

function newProj(req, res) {
    res.render('projects/new');
}