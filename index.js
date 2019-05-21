const http = require('http');
const express = require('express');
const exec = require('child_process').exec;
const path = require("path");
const app = express();
const shell = require('shelljs');
const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine');

app.use(express.static(__dirname + '/view'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'main.html'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'createaccount.html'));
});

/*app.post('/',function(request, response) {
  console.log(request.body);
  //Or
  console.log(request.body.fieldName);
});*/

/*app.post('/', function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  const account = 'Logged in as: ' + username + ' ' + password;
  console.log(account);
  res.sendFile(path.join(__dirname + '/view' + '/' + 'main.html'));
  res.set('userset'(username));
});*/

shell.echo('Script working');
shell.exec(path.join(__dirname + '/' + 'test.sh'));
/*const button =
  function testbutton(){
  const test1 = shell.exec('mkdir test');
  console.log('hello world23');
};

app.post('/', function(req, res) {
  console.log(req.body);
  res.send(200);

  // sending a response does not pause the function
  button();
});*/





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
