const axios = require('axios');

//esta es solo una funcion get
//lat.lon se les recibe como argumentos
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7eaef281e24b3e15ae43d9c6ee567d&units=metric`);
    //retornara la temperatura 
    return resp.data.main.temp;
}

module.exports = {
    getClima
}