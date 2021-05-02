var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
  extended: true
}));// Body parser use JSON data

app.use(require('./controller'));
app.listen('3000', function(){
	console.log("Connected on port 3000.");
});