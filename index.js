const express = require('express');
const path = require("path");
const app = express();
const port = 9000;

 //app.use(express.static(__dirname));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + '/createaccount.html'));
});

app.listen(port);

console.log("Server running at http://localhost:%d", port);
