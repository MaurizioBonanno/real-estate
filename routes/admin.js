const express = require('express');
const router = express.Router();
const tipologie = require('../models/tipologie');
const immobili = require('../models/immobili');



//  Rotta GET pagina index di admin
router.get('/', function (req, res) {
  res.render('./backend/index.ejs',{ 'title': 'Dashboard'});
});


// ROTTA GET di immobili index di admin immobili
router.get('/immobili', function (req, res) {
    res.send('admin immobili',{ 'title': 'Immobili'});
  });

//il form di inserimento di un nuovo immobile
router.get('/immobili/add', function (req, res) {
    res.send('add immobili', { 'title': 'Nuovo immobile'});
  });

//ROTTA GET di tipologie pagina index di admin tipologie
router.get('/tipologie', function (req, res) {

    tipologie.find((err, tipi)=>{
       if(err) {
         return console.log(err)
        }
       console.log(tipi);
       res.render('./backend/tipologie.ejs', {
         'tipologie': tipi ,
         'title' : 'tipi di immobili'
       });
    });
});

//il form di inserimento di un nuova tipologia
router.get('/tipologie/add', function (req, res) {
  res.render('./backend/add_tipologia.ejs',{ 'title': 'Nuova Tipologia'});
  });
//ROUTER POST tipologie add
router.post('/tipologie/add',(req,res)=>{
  
      var t = req.body.tipologia;
      console.log(t);

      const tipo = new tipologie({
            tipologia : t
        });
        tipo.save((err,doc)=>{
          if(err){
            return console.log('err');
          }
          console.log(doc);
          res.redirect('/admin/tipologie');
        });
  });

module.exports = router;