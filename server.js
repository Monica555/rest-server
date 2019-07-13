const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('home');
});



app.listen(3000, () => {
    console.log('Esuchando peticiones en el puerto 3000');
});