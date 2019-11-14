var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/dbase');

//connetto al dbase
mongoose.connect(config.mongoURI, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connesso correttamente al database');
});


//impostiamo il view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//set la cartella public
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
  res.render('./frontend/site_1/it/index');
});

app.get('/chi_siamo',(req,res)=>{
  res.render('./frontend/site_1/it/chisiamo');
});

app.get('/per_comprare',(req,res)=>{
  res.render('./frontend/site_1/it/comprare');
});

app.get('/per_vendere',(req,res)=>{
  res.render('./frontend/site_1/it/vendere');
});

app.get('/valutazioni',(req,res)=>{
  res.render('./frontend/site_1/it/valutazioni');
});

app.get('/case_da_sogno',(req,res)=>{
  res.render('./frontend/site_1/it/chisiamo');
});

app.get('/contatti',(req,res)=>{
  res.render('./frontend/site_1/it/chisiamo');
});

app.get('/news',(req,res)=>{
  res.render('./frontend/site_1/it/chisiamo');
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
