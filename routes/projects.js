const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/projects/new', projectsCtrl.new);

module.exports = router;