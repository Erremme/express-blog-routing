const express = require('express')
const router = express.Router();


// index
router.get('/', function(req, res) {
res.send('Lista dei prodotti');
});

// show
router.get('/:id', function(req, res) {
res.send(`Dettagli del prodotto ${req.params.id}`);
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