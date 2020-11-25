const Account = require('../models/account');
const Budget = require('../models/budget');


module.exports = {
    new: newBudget,
    create,
};

function newBudget(req, res) {
    res.render('budgets/new', {
        accountId: req.params.id
    });
};

function create(req, res) {
    req.body.account = req.params.id;
    Budget.create(req.body, function(err, account) {
        res.redirect(`/accounts/${req.body.account}`);
    });
};