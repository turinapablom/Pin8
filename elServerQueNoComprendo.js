const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // esto es un truquito para que heroku le asigne el puerto que quiera, y si no le asigna ninguno que use el puerto 5000

app.get('/', (req, res) => res.send('que mirás!'))

app.get('/telescopio', (req, res) => res.send('estrelladoo'))

app.listen(PORT, () => console.log('nuestro server está escuchando en el puerto 5000!'))