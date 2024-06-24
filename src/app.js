const express = require('express')
const app = express()
const port = 1001


const cardapioRouter = require('./src/routes/routes.js');
app.use(express.json());

app.use('/', cardapioRouter);

app.listen(port, () => {
  console.log(`Servidor ouvindo na URL: http://localhost:${port}`)
})