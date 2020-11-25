module.exports = {
    index,
};

function index(req, res) {
    res.render('index');
}

// function index(req, res) {
//     console.log(req.user)
//     User.find({}, function(err, users) {
//         res.render('accounts/index', {
//             users,
//             user: req.user,
//         });
//     });
// };