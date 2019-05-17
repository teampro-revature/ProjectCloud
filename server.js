var spawn   = require('child_process').spawn;
var express = require('express');
var app     = express();
var path = require("path");

app.use(express.static(__dirname));

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

app.get('/runsh', function(req, res) {
  var command = spawn(__dirname + '/rsg.sh', [ req.query.textField]);
  var output  = []; 

  command.stdout.on('data', function(chunk) {
    output.push(chunk);
  }); 

  command.on('close', function(code) {
    if (code === 0)
      res.send(Buffer.concat(output));
    else
      res.send(500); // when the script fails, generate a Server Error HTTP response
  });
});

app.listen(3000);
console.log ("running")
