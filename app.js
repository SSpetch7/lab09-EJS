const express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send("Hello");
});

app.listen('3000',function(req,res){
    console.log('Server is running')
});