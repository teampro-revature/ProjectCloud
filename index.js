const http = require('http');
const express = require('express');
const exec = require('child_process').exec;
const path = require("path");
const shell = require('shelljs');

const app = express();
app.set('view engine');

app.use(express.static(__dirname + '/view'));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'main.html'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'createaccount.html'));
});

path.resolve('../', '/../', '../');
//path.normalize('C:\revature\project2a\view/test.sh');
path.normalize('C:\\revature\\\\project2a\\view\\..\\');
shell.echo('hello world22');
//shell.exec('mkdir folder_name && cd folder_name');

const test = shell.exec('./test.sh');


/*app.get('/testsh', function(req, res) {
  var command = spawn(__dirname + 'test.sh', [ req.query.textField]);
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
});*/

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
