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
    res.render('member1.ejs',{Name:'Peter Parker', codename:'SpiderMan'});
});

app.get('/list/member2',function(req,res){
    member = [
        {Name:'Tony Stark',codename:'IronMan'},
        {Name:'Perter Parker',codename:'SpideMan'},
        {Name:'T-Challa',codename:'BlackPanther'}
    ]
        res.render('member2.ejs',{member:member});
    
}); 

app.listen('3000',function(req,res){
    console.log('Server is running')
});