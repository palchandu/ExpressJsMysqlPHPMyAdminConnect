var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
    var db = req.con;
    db.query('SELECT * FROM users ORDER BY id DESC',function(err, rows, fields) {
            //if(err) throw err
            if (err) {
                res.render('users', {
                    title: 'User List', 
                    data: ''
                })
            } else {
                // render to views/user/list.ejs template file
                res.render('users', {
                    title: 'User List', 
                    data: rows
                })
            }
        })

});


module.exports = app;