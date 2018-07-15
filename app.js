const argv = require('./yargs/yargs').argv;
const axios = require('axios');

const api_key = "AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI";
const api_dir = "https://maps.googleapis.com/maps/api/geocode/json?address="; // despues de address se añade el nombre del lugar

let encodeUrl = encodeURI(argv.direccion);

//console.log(encodeUrl);

axios.get(api_dir + encodeUrl + '&key=' + api_key)
    .then((resp) => {
        // console.log(JSON.stringify(resp.data, undefined, 2));
        let data = resp.data;
        let city = data.results[0];
        let location = city.geometry.location;

        //console.log(resp.data);
        console.log(city.formatted_address);
        console.log(location); // lat, lng
    })
    .catch((err) => {
        console.log(err);
    });