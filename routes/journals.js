const express = require('express');
const router = express.Router();
const journalsCtrl = require('../controllers/journals');

router.get('/', journalsCtrl.index);

router.get('/new', journalsCtrl.new);

router.post('/', journalsCtrl.create);

router.get('/:id', journalsCtrl.show);

router.post('/:id/projects', journalsCtrl.addProject);

router.delete('/:id', journalsCtrl.delJournal);






module.exports = router;