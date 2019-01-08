let usuarios = {
    1: {
        puntos: 0,
        persona: {
            ultimasCoord: {
                lat: 123,
                long: 321,
                accuracy: 12,
                timestamp: '123443534'
            },
            nombre: 'Alejandro',
            cadenaReferentes: [1]
        },
        mascota: {
            nombre: 'esta',
        },
    }
}

function addUser(usuarios, ponerNombre, nombreMascota, idUsuarioReferente) {
    let numeroUsuario = Object.keys(usuarios).length + 1

    usuarios[numeroUsuario] = {
        puntos: 0,
        persona: {
            ultimasCoord: {},
            nombre: ponerNombre,
            cadenaReferentes: [parseInt(idUsuarioReferente)],
        },
        mascota: {
            nombre: nombreMascota,
        },
    }

    usuarios[numeroUsuario].persona.cadenaReferentes.push(numeroUsuario)
}

function botonCreaUsuario() {
    var nombreform = document.getElementById("ponerNombre").value;
    var mascotaForm = document.getElementById("nombreMascota").value;
    var referenteForm = document.getElementById("idUsuarioReferente").value;
    addUser(usuarios, nombreform, mascotaForm, referenteForm)
    console.log(usuarios)
    creaLista()
}


function creaLista() {

    let liste = document.getElementById("lista");
    liste.innerHTML = '';

    for (const [id, usuario] of Object.entries(usuarios)) {
        let item = document.createElement("li")

        item.innerHTML = `${usuario.persona.nombre} y tiene una mascota llamada ${usuario.mascota.nombre}`
        console.log(usuario)
        liste.appendChild(item)
    }
}


function addLocation(userId, ponerLat, ponerLong) {

    usuarios[userId] = {
        persona: {
            ultimasCoord: {
                lat: ponerLat,
                long: ponerLong,
                accuracy: 12,
                timestamp: Date.now()
            },
        },
    }
}

function getCoordinatesArray(usuarios) {
    let todasCoordenadas = []
    const usuariosAArray = Object.values(usuarios)

    for (i = 0; i < usuariosAArray.length; i++) {
        let cordenadasPersona = []
        cordenadasPersona.push(usuariosAArray[i].persona.ultimasCoord.lat)
        cordenadasPersona.push(usuariosAArray[i].persona.ultimasCoord.long)
        todasCoordenadas.push(cordenadasPersona)
    }

    return todasCoordenadas
}