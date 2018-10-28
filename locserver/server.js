var  PORT = process.env.LOCSERVER_PORT | 3000

var express = require('express');
var db = require('./db')
var app = express();

app.get('/', function (req, res) {
	  res.send('Hello World!');
});

app.get('/get_near', function (req, res) {
	q = req.query;
	console.log("client wants receipts near",q.loc)
	near = db.get_near(q.loc)
	res.send(JSON.stringify(near));
});

app.listen(PORT, function () {
	  console.log('Location server listening on port'+PORT+'!');
});

