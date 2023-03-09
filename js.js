<<<<<<< HEAD
<<<<<<< HEAD
//01
=======
//001(5)
>>>>>>> 109d179 (feat: commit 001(5))
=======
//002(6)

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
// app.listen(3000, function () { console = console.log });
>>>>>>> ef64cad (feat: :ambulance: commit 002 (6))
