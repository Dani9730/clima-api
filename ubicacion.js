const axios = require('axios');

const getCiudadLatLon = async(nombre) => {

        const ciudad = encodeURI(nombre);

        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
            headers: { 'X-RapidAPI-Key': '8ac05538ebmsh1d8d2bb9ae49d50p1737a9jsn3064fa337c89' }
        });
        //await de el get, trae la informacion y se almacena en respuesta
        const resp = await instance.get();
        //si la respuesta es igual a 0
        if (resp.data.Results.length === 0) {
            throw new Error(`No existe resultados para ${nombre}`);
        }
        //va ser igual a data de los resultados de la posicion 0
        const data = resp.data.Results[0];
        const name = data.name;
        const lat = data.lat;
        const lon = data.lon;

        return {
            name,
            lat,
            lon
        }
        //se creara una propiedad nombre con el valor que tiene la variable name
    }
    //exportacion para poder usar el getCiudadLatLon
module.exports = {
    getCiudadLatLon
}