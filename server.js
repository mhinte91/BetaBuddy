const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

require('./config/mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(port, () => console.log(`Express is listening on port ${port}`));