const http = require('http');
const express = require('express');

//const hostname = '127.0.0.1';
//const port = 3000;

const app = express();
app.set('view engine');

app.use(express.static('./view'));

app.get('/', (req, res) => res.render('./view/index.html'));

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('');
});*/
const port = process.env.PORT || 8080; //1337
app.listen(port);

console.log("Server running at http://localhost:%d", port);

/*server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
