const express = require('express');
const prodotti = require('../data/prodotti');
const router = express.Router();


// index
router.get('/', function(req, res) {
res.json(prodotti);
});

// show
router.get('/:id', function(req, res) {
   if(isNaN (req.params.id)){
      res.sendStatus(400)
   }
   const prodotto = prodotti.find(elm => elm.id == req.params.id)
   if(!prodotto){
    res.sendStatus(404)
   }
   res.json(prodotto);
});

// store
router.post('/', function(req, res) {
   res.send('Creazione nuovo prodotto');
});

//update
router.put('/:id', function(req, res){
    res.send(`Modifica integrale del prodotto ${req.params.id}`)
}) ;

//modify
router.patch('/:id', function(req,res){
    res.send(`Modifica parziale del prodotto ${req.params.id}`)
});

//delete
router.delete('/:id', function(req, res){
    res.send(`Cancellazzione del prodotto ${req.params.id}`)
})


module.exports = router;