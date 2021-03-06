const Budget = require('../models/budget');
const User = require('../models/user');

module.exports = {
    index,
    new: newBudget,
    create,
    show,
    addExpense,
    delete: delExpense,
    edit,
    update
};

function index(req, res) {
    req.body.createdBy = req.user._id;
    Budget.find({}).populate('createdBy').exec(function(err, budgets) {
        res.render('budgets/index', { title: 'Budgets', budgets });
    });
};

function newBudget(req, res) {
    res.render('budgets/new', { title: 'Add budget' });
};

function create(req, res) {
    req.body.createdBy = req.user._id;
    Budget.create(req.body, function(err, budget) {
        res.redirect('/budgets');
    });
};

function show(req, res) {
    Budget.findById(req.params.id)
    .populate('createdBy').exec(function(err, budget) {
            res.render('budgets/show', { title: 'Budget Detail', budget });
    });
};

function addExpense(req, res) {
    Budget.findById(req.params.id, function(err, budget) {
        req.body.createdBy = req.user._id;
        budget.expense.push(req.body);
        budget.save(function(err) {
            res.redirect(`/budgets/${budget._id}`);
        });
    });
};

function edit(req, res) {
    Budget.findOne({'expense._id': req.params.id}, function(err, budget) {
        req.body.createdBy = req.user._id;
        const expense = budget.expense.id(req.params.id);
        res.render('budgets/edit', { expense });
    });
};

function update(req, res) {
    Budget.findOne({'expense._id': req.params.id}, function(err, budget) {
        const expense = budget.expense.id(req.params.id);
        expense.title = req.body.title;
        expense.amount = req.body.amount;
        expense.dueDate = req.body.dueDate;
        budget.save(function(err) {
            console.log(err);
            res.redirect(`/budgets/${budget._id}`);
        });
    });
};

function delExpense(req, res) {
    Budget.findOne({'expense._id': req.params.id}, function(err, budget) {
        const expense = budget.expense.id(req.params.id);
        expense.remove();
        budget.save(function(err) {
            console.log(err);
            console.log(expense);
            res.redirect(`/budgets/${budget._id}`);
        });
    });
};