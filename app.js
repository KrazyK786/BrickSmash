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
mongoose.set('useCreateIndex', true); // resolve deprecation warning

mongoose.connect(config.database, config.options);

// mongoose.Promise = global.Promise;

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
// const port = 8080;
// const port = process.env.MONGODB_URI || 8080;
const port = process.env.port || 8080;

// set static folder
app.use(express.static(path.join((__dirname, 'public'))));

// CORS middleware
app.use(cors());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// TODO: do i need the 2nd line?
// bodyparser
app.use(bodyParser.json());
// app.use(bodyparser.urlencoded({extended:false}));

// TODO: does Angular handle this?
// ejs
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// Routes
// index route
app.get('/', (req, res) => {
    res.send('Invalid Endpointtt');
});

// users route
app.use('/users', users);

// redirect all other traffic
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start server
app.listen(port, ()=>{
    console.log('Server is running on port ' + port);
});
