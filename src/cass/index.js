const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 9000;
app.get('/', function(req, res){
    res.send('this is the first page used for testing');
})
app.listen(9000, function(){
    console.log('this is the testing and it has just started')
})
