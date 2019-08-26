const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/journals/:id/new', projectsCtrl.new);

router.get('/projects/:id', projectsCtrl.show);

router.post('/projects/:id', projectsCtrl.newNote);


module.exports = router;