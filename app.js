var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
var config = require('./config/dbase');
//la rotta di admin per gli immobili
const admin_route= require('./routes/admin');



//body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//middleware delle rotte admin immobili
app.use('/admin', admin_route);


//express file upload  middleware
app.use(fileUpload());

//connetto al dbase
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
   useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connesso correttamente al database:'+config.mongoURI);
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
