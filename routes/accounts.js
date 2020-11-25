const express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts');
const isAuthenticated = require('../utils/authorization');

router.get('/', isAuthenticated, accountsCtrl.index);
router.get('/new', isAuthenticated, accountsCtrl.new);
router.post('/', isAuthenticated, accountsCtrl.create);
router.get('/:id', isAuthenticated, accountsCtrl.show);

module.exports = router;