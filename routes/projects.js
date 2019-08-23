const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/journals/:id/new', projectsCtrl.new);


module.exports = router;