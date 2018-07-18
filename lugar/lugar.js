const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const api_key = "AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI"; // key del curso
    const api_dir = "https://maps.googleapis.com/maps/api/geocode/json?address="; // despues de address se añade el nombre del lugar
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(api_dir + encodeUrl + '&key=' + api_key)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No existen resultados para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}