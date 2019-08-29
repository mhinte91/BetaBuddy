const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const journalsRouter = require('./routes/journals');
const notesRouter = require('./routes/notes');
const session = require('express-session');
const passport = require('passport');
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');


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

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/journals', journalsRouter);
app.use('/', notesRouter);




app.listen(port, () => console.log(`Express is listening on port ${port}`));