const express = require('express');
let app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send("Hello");
});

app.listen('3000',function(req,res){
    console.log('Server is running')
});