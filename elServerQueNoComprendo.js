const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // esto es un truquito para que heroku le asigne el puerto que quiera, y si no le asigna ninguno que use el puerto 5000
var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded())

let posic1 = {
    latitud: 13.232323,
    longitud : 13.232323
}
let posic2 = {
    latitud: 23.232323,
    longitud : 23.232323
}
let posic3 = {
    latitud: 33.232323,
    longitud : 33.232323
}

let posiciones = [posic1, posic2, posic3]


app.get('/', (req, res) => res.sendfile('./html/gps.html'))

app.get('/telescopio', (req, res) => res.sendfile('./html/tokio.html'))

app.post('/calculador', (request, response) => {
    console.log(request.body)
    return response.send(posiciones)

})

app.listen(PORT, () => console.log('nuestro server está escuchando en el puerto 5000!'))