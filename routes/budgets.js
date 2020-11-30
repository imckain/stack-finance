const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');
const isAuthenticated = require('../utils/authorization');

router.get('/', isAuthenticated, budgetsCtrl.index);
router.get('/new', isAuthenticated, budgetsCtrl.new);
router.post('/', isAuthenticated, budgetsCtrl.create);
router.get('/:id', isAuthenticated, budgetsCtrl.show);
router.post('/:id/expense', isAuthenticated, budgetsCtrl.addExpense);
router.delete('/expense/:id', isAuthenticated, budgetsCtrl.delete);
router.get('/expense/:id/edit', isAuthenticated, budgetsCtrl.edit);
router.put('/expense/:id', isAuthenticated, budgetsCtrl.update);

module.exports = router;