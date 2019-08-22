const express = require('express');
const router = express.Router();

// Get landing page
router.get('/', (req, res) => res.render(console.log('Hello')));

module.exports = router;