const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/journals/:id/new', projectsCtrl.new);

router.get('/projects/:id', projectsCtrl.show);

router.delete('/projects/:id', projectsCtrl.delete);

router.post('/journals/:id/projects', projectsCtrl.create);




module.exports = router;