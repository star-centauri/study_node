const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Configurações da App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3333);