var express = require('express');
var app = express();

// DataBase 
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test"
});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
// Make our db accessible to our router
app.use(function(req,res,next){
    req.con = con;
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', users);
 
app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000')
});