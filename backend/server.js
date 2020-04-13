const express = require('express');
const http = require('http');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const cors = require('cors');

const apiRouter = require('./routes/api');

// Server constructor
const server = express();


server.use(helmet());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('static'));
server.use(cors());

server.use("/api", apiRouter);

// Port

const PORT = process.env.PORT || 3000;

// Server ready to listen
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})