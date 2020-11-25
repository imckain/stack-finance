const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');
const isAuthenticated = require('../utils/authorization');

router.get('/accounts/:id/budgets/new', isAuthenticated, budgetsCtrl.new);
router.post('/accounts/:id/budgets', isAuthenticated, budgetsCtrl.create);

module.exports = router;