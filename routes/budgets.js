const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');
const isAuthenticated = require('../utils/authorization');

router.get('/', isAuthenticated, budgetsCtrl.index);
router.get('/new', isAuthenticated, budgetsCtrl.new);
router.post('/', isAuthenticated, budgetsCtrl.create);
router.get('/:id', isAuthenticated, budgetsCtrl.show);
router.post('/:id/expense', isAuthenticated, budgetsCtrl.addExpense);

module.exports = router;