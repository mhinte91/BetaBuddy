const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');


router.post('/:id', notesCtrl.create);

router.delete('/:id', notesCtrl.delete);

module.exports = router;
