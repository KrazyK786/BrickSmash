// setup
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// TODO: do i need this?
// const rootPage = require('./routes/rootPage.route');

// mongodb
mongoose.connect(config.database);

const db = mongoose.connection;
db.on('connection', () => {
    console.log("Connected to database " + config.database);
});

db.on('error', (err) => {
    console.log("Database error: " + err);
});

// initialize express app
const app = express();

// initialize users
const users = require('./routes/users');

// set port
const port = 8080;

// set static folder
app.use(express().static(path.join((__dirname, 'public'))));




// bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// commenting out - Angular instead?
// ejs
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(express.static(__dirname));

app.use('/', rootPage);


app.listen(port, ()=>{
    console.log('Server is running on port ' + port);
});
