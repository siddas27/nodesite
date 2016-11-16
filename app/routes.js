//require express
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router();

//export our router
module.exports = router;


//route for our home
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../index.html'));
});

//route for our about page
router.get('/about',function(req,res){
	res.sendFile(path.join(__dirname,'../about.html'));	
});

//route for contatct i.e. one get page and one post
router.get('/contact',function(req,res){
	res.sendFile(path.join(__dirname,'../contact.html'));
});
router.post('/contact',function(req,res){
});
