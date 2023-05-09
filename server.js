const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let datos = {};


app.post('/datos', (req, res) => {
    const { Humedad, Temperatura, Litros, LitrosPorHora, Indice } = req.body;
    datos = { Humedad, Temperatura, Litros, LitrosPorHora, Indice};
    console.log(datos);
    res.sendStatus(200);
});

app.get('/datos', (req, res) => {
    res.send(datos);
});


app.listen(8080, () => {
    console.log('API escuchando en el puerto 8080');
});

