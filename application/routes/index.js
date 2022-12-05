var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"[Insert your name here]", css:["stylesheet.css"],
    js:["indexscript.js"]});
});

router.get("/login",function(reg,res){
  res.render('login', {css:["stylesheet.css"]});
});

router.get("/register",function(reg,res){
  res.render('registration', {css:["stylesheet.css"], js:["script.js"]});
});

router.get("/postimage",function(reg,res){
  res.render('postimage', {css:["stylesheet.css"]});
});

router.get("/posts/:id",function(reg,res){
  res.render('viewpost', {css:["stylesheet.css"]});
});

module.exports = router;
