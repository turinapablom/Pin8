const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // esto es un truquito para que heroku le asigne el puerto que quiera, y si no le asigna ninguno que use el puerto 5000
var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var posiciones = {}

//let posiciones = [posic1, posic2, posic3]

app.get('/', (req, res) => res.sendfile('./html/gps.html'))

app.get('/telescopio', (req, res) => res.sendfile('./html/tokio.html'))

// var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


app.post('/calculador', (request, response) => {
    //console.log(request.body)
    //console.log(request)
    var ip = request.connection.remoteAddress
    posiciones[ip] = request.body
    
    console.log(posiciones)
    return response.send(Object.values())
 
})



app.listen(PORT, () => console.log('nuestro server está escuchando en el puerto 5000!'))


