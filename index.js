const express = require('express');
const bodyparser = require('body-parser')
const app = express();
console.log(__dirname)
const path = require('path');
const port = process.env.PORT || 9000;
var username;
username = ['cass', 'kelechi'];
app.use(bodyparser.urlencoded({extended : true}))
app.use(express.urlencoded({extended : true}))
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'lumia', 'index.html'))
})
app.use('/', express.static(path.join(__dirname, 'lumia')))
app.use('/login', express.static(path.join(__dirname, 'login')))
app.post('/submit', function(req, res){
    console.log(req.body)
 if (username.includes(req.body.name) && req.body.password == 'ENG1704409'){
    console.log('it is part of it')
    res.redirect(req.body.name)
 }
 else {
   res.redirect('/inc')
 }
})
app.use('/cass', express.static(path.join(__dirname, 'cass')))
app.use('/inc', express.static(path.join(__dirname, 'inc')))
app.listen(port, function(){
    console.log('this is the testing and it has just started')
})