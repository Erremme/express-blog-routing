
const express = require('express')
const res = require('express/lib/response')
const { get } = require('express/lib/response');
const app = express();
const port = 3000;

const prodotti = require('./data/prodotti')
const prodottiRouters = require('./routers/prodotto')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Server del mio Blog!')
});

app.use("/prodotti", prodottiRouters);



app.listen(port, () => {
  console.log(`my blog app listening on port ${port}`)
});
