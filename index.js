const http = require('http');
const express = require('express');
const path = require("path");
const shell = require('shelljs');
const bodyParser = require("body-parser");
const app = express();


//app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine');

app.use(express.static(__dirname + '/view'));
//app.use(express.urlencoded())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/main',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/main.html'));
});

app.get('/vmcreate',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/vmcreate.html'));
});

app.get('/dbcreate',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

app.get('/bscreate',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/vmcreate.html'));
});

app.get('/vncreate',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

app.get('/appecreate',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/vmcreate.html'));
});

app.get('/vmdelete',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

app.get('/dbdelete',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

app.get('/bsdelete',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

app.get('/vndelete',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

app.get('/appedelete',function(req,res) {
  res.sendFile(path.join(__dirname + '/view'+ '/dbcreate.html'));
});

/*app.post('/main', function(req, res, next) {
  shell.exec(`${path.join(__dirname, '../vm-script.sh')} ${req.body.groupName} ${req.body.typedvm}`) 
  res.sendFile(path.join(__dirname + '/view'+ '/main.html'));
});*/
function errorname(){
  $( "p.item2" ).html("<p class = 'item2' id='error'>ERROR: DUPLICATE NAME</p>");
}

function errorblank(){
  $( "p.item2" ).html("<p class = 'item2' id='error'>ERROR: FIELD CANNOT BE BLANK</p>");
}

function errornone(){
  $( "p.item2" ).html("<p class = 'item2' id='error'>ERROR: NO ELEMENT SELECTED</p>");
}

function errorlength(){
  $( "p.item2" ).html("<p class = 'item2' id='error'>ERROR: TOO MANY CHARACTERS</p>");
}


let totalItems=0;  //all of this will be changed to linkage(scripts) of storage for account
let totalArray=[];
let totalVm = 0;
let vmArray= [];
let totalDb= 0;
let dbArray= [];
let totalBs= 0;
let bsArray= [];
let totalVn= 0;
let vnArray= [];
let totalAppe = 0;
let appeArray= [];


//creates
app.post('/vmcreate',function(req,res) {
  const typedvm = req.body.vmname;
  //console.log(typedvm);
  if (typedvm.length != 0 && typedvm.length <= 12){
    if (totalVm != 0){
        for (i=0;i<totalVm;i++){
            //check if duplicate
            if(typedvm == vmArray[i]){
                console.log("this is named the same as another vm");
                errorname();
            }
        }
        totalVm++;
        totalItems++;
        vmArray.push(typedvm);
        totalArray.push(typedvm);
        console.log("newly created vm is: "+typedvm);
        console.log("number of total vm is now: "+totalVm);
        // run script
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedvm}`);
    }
    else{
        totalVm++;
        totalItems++;
        vmArray.push(typedvm);
        totalArray.push(typedvm);
        console.log("newly created vm is: "+typedvm);
        console.log("number of total vm is now: "+totalVm);
        //run script
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedvm}`);
    }
}
else if(typedvm.length > 12){
    errorlength();
}
else{
    errorblank();
    return;
}
//});
  //res.redirect('/main');
  //shell.exec(`${path.join(__dirname, './test.sh')} ${typedvm}`);
  //totalVm++;
  //console.log(totalVm);
});

app.post('/dbcreate',function(req,res) {
  const dbname = req.body.dbname;
  if (typeddb.length != 0 && typeddb.length <= 12){
    if (totalDb != 0){
        for (i=0;i<totalDb;i++){
            //check if duplicate
            if(typeddb == dbArray[i]){
                console.log("this is named the same as another db");
                errorname();
                return;
            }
        }
        totalDb++;
        totalItems++;
        dbArray.push(typeddb);
        totalArray.push(typeddb);
        console.log("newly created db is: "+typeddb);
        console.log("number of total db is now: "+totalDb);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typeddb}`);
    }
    else{
        totalDb++;
        totalItems++;
        dbArray.push(typeddb);
        totalArray.push(typeddb);
        console.log("newly created db is: "+typeddb);
        console.log("number of total db is now: "+totalDb);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typeddb}`);
    }
}
else if(typeddb.length>12){
    errorlength();
    return;
}
else{
    errorblank();
    return;
}
});

app.post('/bscreate',function(req,res) {
  const bsname = req.body.bsname;
  if (typedbs.length != 0 && typedbs.length <= 12){
    if (totalBs != 0){
        for (i=0;i<totalBs;i++){
            //check if duplicate
            if(typedbs == bsArray[i]){
                console.log("this is named the same as another bs");
                errorname();
                return;
            }
        }
        totalBs++;
        totalItems++;
        bsArray.push(typedbs);
        totalArray.push(typedbs)
        console.log("newly created bs is: "+typedbs);
        console.log("number of total bs is now: "+totalBs);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedbs}`);
    }
    else{
        totalBs++;
        totalItems++;
        bsArray.push(typedbs);
        totalArray.push(typedbs);
        console.log("newly created bs is: "+typedbs);
        console.log("number of total bs is now: "+totalBs);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedbs}`);
    }
}
else if(typedbs.length>12){
    errorlength();
    return;
}
else{
    errorblank();
    return;
}
});

app.post('/vncreate',function(req,res) {
  const vnname = req.body.vnname;
  if (typedvn.length != 0 && typedvn.length <= 12){
    if (totalVn != 0){
        for (i=0;i<totalVn;i++){
            //check if duplicate
            if(typedvn == vnArray[i]){
                console.log("this is named the same as another vn");
                errorname();
                return;
            }
        }
        totalVn++;
        totalItems++;
        vnArray.push(typedvn);
        totalArray.push(typedvn);
        console.log("newly created vn is: "+typedvn);
        console.log("number of total vn is now: "+totalVn);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedvn}`);
    }
    else{
        totalVn++;
        totalItems++;
        vnArray.push(typedvn);
        totalArray.push(typedvn);
        console.log("newly created vn is: "+typedvn);
        console.log("number of total vn is now: "+totalVn);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedvn}`);
    }
}
else if(typedvn.length>12){
    errorlength();
    return;
}
else{
    errorblank();
    return;
}
});

app.post('/appecreate',function(req,res) {
  const appename = req.body.appename;
  if (typedappe.length != 0 && typedappe.length <= 12){
    if (totalAppe != 0){
        for (i=0;i<totalAppe;i++){
            //check if duplicate
            if(typedappe == appeArray[i]){
                console.log("this is named the same as another appe");
                errorname();
                return;
            }
        }
        totalAppe++;
        totalItems++;
        appeArray.push(typedappe);
        totalArray.push(typedappe);
        console.log("newly created appe is: "+typedappe);
        console.log("number of total appe is now: "+totalAppe);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedappe}`);
    }
    else{
        totalAppe++;
        totalItems++;
        appeArray.push(typedappe);
        totalArray.push(typedappe);
        console.log("newly created appe is: "+typedappe);
        console.log("number of total appe is now: "+totalAppe);
        res.redirect('/main');
        shell.exec(`${path.join(__dirname, './test.sh')} ${typedappe}`);
    }
}
else if(typedappe.length>12){
    errorlength();
    return;
}
else{
    errorblank();
    return;
}
});


//deletes
app.post('/vmdelete',function(req,res) {
  const typedvm = req.body.typedvm;
  console.log(typedvm);
  res.redirect('/main');
  shell.exec(`${path.join(__dirname, '../test.sh')} ${req.body.typedvm} ${req.body.typedvm}`) ;
});

app.post('/dbdelete',function(req,res) {
  const dbname = req.body.dbname;
  console.log(dbname);
  res.redirect('/main');
  shell.exec(`${path.join(__dirname, '../test.sh')} ${req.body.dbname} ${req.body.dbName}`) ;
});

app.post('/bsdelete',function(req,res) {
  const bsname = req.body.bsname;
  console.log(bsname);
  res.redirect('/main');
  shell.exec(`${path.join(__dirname, '../test.sh')} ${req.body.bsname} ${req.body.bsName}`) ;
});

app.post('/vndelete',function(req,res) {
  const vnname = req.body.vnname;
  console.log(vnname);
  res.redirect('/main');
  shell.exec(`${path.join(__dirname, '../test.sh')} ${req.body.vnname} ${req.body.vnName}`) ;
});

app.post('/appedelete',function(req,res) {
  const appename = req.body.appename;
  console.log(appename);
  res.redirect('/main');
  shell.exec(`${path.join(__dirname, '../test.sh')} ${req.body.appename} ${req.body.appename}`) ;
});
/*function scripting(){
  shell.echo('Script working');
  console.log("hello");
  shell.exec(`${path.join(__dirname, '../vm-she.sh')} ${req.body.groupName} ${req.body.typedvm}`) 
  }*/
//shell.exec(path.join(__dirname + '/' + 'test.sh'));
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

const port = process.env.PORT || 6420;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
