// const Account = require('../models/account');
// const Budget = require('../models/budget');

// module.exports = {
//     index,
//     new: newAccount,
//     create,
//     show,
// };

// function index(req, res) {
//     Account.find({}, function(err, accounts) {
//         res.render('accounts/index', { title: 'Accounts', accounts });
//     });
// };

// function newAccount(req, res) {
//     res.render('accounts/new', { title: 'Add Account' });
// };

// function create(req, res) {
//     const account = new Account(req.body);
//     account.save(function(err) {
//         if (err) return res.redirect('/accounts/new');
//         res.redirect(`/accounts`);
//     });
//     console.log(account);
//     // Account.create(req.body, function(err, account) {
//     //     res.redirect('/accounts');
//     // });
// };

// function show(req, res) {
//     Account.findById(req.params.id)
//     .populate('budget').exec(function(err, account) {
//         Budget.find({ account: account._id }).populate('budget').exec(function(err, budget) {
//                 console.log(budget);
//                 res.render('accounts/show', { title: 'Account Detail', account, budget });
//         });
//     });
// };