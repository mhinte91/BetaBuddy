const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const journalsRouter = require('./routes/journals');
var session = require('express-session');
var passport = require('passport');

const app = express();
const port = 3000;

require('dotenv').config();

require('./config/mongoose');
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'SEIRocks!',
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/journals', journalsRouter);


app.listen(port, () => console.log(`Express is listening on port ${port}`));