var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
//conts http= require('http');
//conts shell = require("shelljs");

// Initialize variables.
var port = 8080; // process.env.PORT || 8080;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use(express.static('JavaScriptSPA'))

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/createaccount.html'));
});
shell.echo("test")
conts execute = shell.exec('./scr.sh)

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');
