var express = require('express');
var path = require('path');
var User = require('../model/user');
//create our router object
var router = express.Router();

//export our router
module.exports = router;

router.get('/',function(req,res){
	console.log("Got get request");
	res.sendFile(path.join(__dirname,'../signup.html'));
});
router.post('/',function(req,res){
	console.log(req.body);
	var new_user = new User({
		name : req.body.name
	});
	//new_user.save(function(err,user){
	//	if(err){
	//		res.send(err);
	//	}
	//	else{
	//		res.send("User succesfully saved !");
	//	}
	//});

	User.findOne ({name:req.body.username}).then(function(user){
		console.log(user.name);
		if (user.name == req.body.name) {res.send("you are already registered");}
  		else if(Object.keys(user).length === 0) {res.send("enter a valid user name !");}
  		else{
  			new_user.save(function(err,user){
				if(err){
					res.send(err);
				}
				else{
					res.send("User succesfully saved !");
				}
			});
  		}
			  		
  	})
 });

router.get('/list',function(req,res){
	User.find(function(err,users){
		if(err){
			res.send(err);
		}else{
			res.send(users);
		}
	});

});


