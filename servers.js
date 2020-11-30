const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const budgetsRouter = require('./routes/budgets');

require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use('/', indexRouter);
app.use('/budgets', budgetsRouter);

app.get('/budgettestapi', (req, res) => {
    Budget.find({}).populate('createdBy').exec(function(err, budgets) {
        res.render('budgets/index', { title: 'Budgets', budgets });
    });
})

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});