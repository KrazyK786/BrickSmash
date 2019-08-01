// setup
const express = require('express');
const bodyparser = require('body-parser');

const rootPage = require('./routes/rootPage.route');

// initialize express app
const app = express();

// mongodb
const mongoose = require('mongoose');
mongoose.connect("monmongodb://localhost:27017/bricksmash",{
    useNewUrlParser:true,
    useFindAndModify: false, //may need to change once setup for score changes - KEJ
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));


// bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname));

app.use('/', rootPage);

// port
let port = 8080;

app.listen(port, ()=>{
    console.log('Server is running on port ' + port);
});