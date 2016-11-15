/*import htp module
var http = require('http');


//handle sending requests and returning responses
function handleRequest(req,res)
{

//return strings
res.end("hello world");
}
//create the server
var server = http.createServer(handleRequest);

//start server and listen on port x
server.listeng('8000',function(){
	console.log("listenin to port 8000");
});*/



/////////////////////  EXPRESS //////////////////
//require our dependencies
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');
var app = express();
var port = 8080;

//route our app
var router = require('./app/routes');



//set static files(css or js or imgs)
app.use(express.static(__dirname + "/public"));


//express middlewire which have access to all our routes
app.use('/',router);

//start your server
app.listen(port,function(){
	console.log('app started')
});

