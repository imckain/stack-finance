// const budget = require('../models/budget');
// const Budget = require('../models/budget');


// module.exports = {
//     new: newBudget,
//     create,
// };

// function newBudget(req, res) {
//     res.render('budgets/new', {
//         budgetId: req.params.id
//     });
// };

// function create(req, res) {
//     req.body.budget = req.params.id;
//     Budget.create(req.body, function(err, budget) {
//         res.redirect(`/budgets/${req.body.budget}`);
//     });
// };

// const budget = require('../models/budget');
const Budget = require('../models/budget');

module.exports = {
    index,
    new: newBudget,
    create,
    // show,
};

function index(req, res) {
    Budget.find({}).populate('createdBy').exec(function(err, budgets) {
        res.render('budgets/index', { title: 'Budgets', budgets });
    });
};

function newBudget(req, res) {
    res.render('budgets/new', { title: 'Add budget' });
};

function create(req, res) {
    const budget = new Budget(req.body);
    budget.save(function(err) {
        if (err) return res.redirect('/budgets/new');
        res.redirect(`/budgets`);
    });
    console.log(budget);
    // budget.create(req.body, function(err, budget) {
    //     res.redirect('/budgets');
    // });
};

// function show(req, res) {
//     Budget.findById(req.params.id)
//     .populate('createdBy').exec(function(err, budget) {
//         Budget.find({ budget: budget._id }).populate('budget').exec(function(err, budget) {
//                 console.log(budget);
//                 res.render('budgets/show', { title: 'Budget Detail', budget, budget });
//         });
//     });
// };