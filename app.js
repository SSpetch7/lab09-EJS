const express = require('express');
let app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("home.ejs");
});

app.get('/:hero',function(req,res){
    let hero = req.params;
    res.render('hero.ejs',hero);
    //console.log(hero);
})

app.get('/list/member1',function(req,res){
    res.render('memver1.ejs',{Name:'Peter Parker', codename:'SpiderMan'});
});
app.listen('3000',function(req,res){
    console.log('Server is running')
});