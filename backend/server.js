const express = require('express');
const helmet = require('helmet');

// Server constructor
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hola mundo')
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})