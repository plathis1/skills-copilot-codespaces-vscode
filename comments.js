// Create web server application with Node.js and Express.js
// Run the server: node comments.js
// Load the web page in a browser: http://localhost:3000
// Load the web page in a browser: http://localhost:3000/comments.html

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post('/comments', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment" + req.body.id] = req.body;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

app.delete('/comments', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["comment" + req.body.id];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

app.put('/comments', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment" + req.body.id] = req.body;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Comments app listening at http://%s:%s", host, port)
})