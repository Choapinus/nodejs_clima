const axios = require('axios');

const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`
    let resp = await axios.get(url);
    let data = resp.data.main;

    return data.temp;
}

module.exports = {
    getClima
}