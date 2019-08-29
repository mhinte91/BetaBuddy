const express = require('express');
const router = express.Router();
const journalsCtrl = require('../controllers/journals');

// @ GET 
// @ private route
// @ brings user to home page
router.get('/', isLoggedIn, journalsCtrl.index);

router.get('/new', isLoggedIn, journalsCtrl.new);

router.post('/', isLoggedIn, journalsCtrl.create);

router.get('/:id', isLoggedIn, journalsCtrl.show);

router.delete('/:id', isLoggedIn, journalsCtrl.delJournal);

router.get('/:id/edit', isLoggedIn, journalsCtrl.edit);

router.put('/:id', isLoggedIn, journalsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;