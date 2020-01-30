//importamos axios
const axios = require('axios');
//importamos ubicacion con todo lo que esta exportado
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');
//configuración del yargs, se configura el comando en la 
//raiz de la aplicacion
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//funcion getInfo que va ser igual a una funcion flecha
const getInfo = async(ciudad) => {
    try {
        //primero necesito las coordenadas
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lon);
        //si se encuentra la informacion retornara 
        return `El clima de ${ coords.name } es de ${ temp }.`;
    } catch (e) {
        //Caso contrario no se podra determinar el clima
        return `No se pudo determinar el clima de ${ ciudad } ${e}`;
    }
}

getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);