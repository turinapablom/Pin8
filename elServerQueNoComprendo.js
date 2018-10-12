const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // esto es un truquito para que heroku le asigne el puerto que quiera, y si no le asigna ninguno que use el puerto 5000
var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let posiciones = [posic1, posic2, posic3]

app.get('/', (req, res) => res.sendfile('./html/gps.html'))

app.get('/telescopio', (req, res) => res.sendfile('./html/tokio.html'))

app.post('/calculador', (request, response) => {
    console.log(request.body)
    return response.send([request.body])

})

app.listen(PORT, () => console.log('nuestro server está escuchando en el puerto 5000!'))
