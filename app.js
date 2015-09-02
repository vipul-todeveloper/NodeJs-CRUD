var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    expressValidator = require('express-validator');

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());

/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

var config = require('./server/config/config.json');
app.use(
    connection(mysql,{
        host     : config.host,
        user     : config.username,
        password : config.password,
        database : config.database
    },'request')
);

var user = require('./server/routes/user')(app);

//start Server
var server = app.listen(3030,function(){

    console.log("Listening to port %s",server.address().port);

});