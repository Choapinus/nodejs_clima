const argv = require('./yargs/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {

        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura en ${ coords.direccion } es de ${ temp } grados Celsius`;

    } catch (error) {
        return `No se pudo comprobar la temperatura en ${ direccion }`;
    }


}

getInfo(argv.direccion).then(msg => {
    console.log(msg);
}).catch(err => {
    console.log(err);
});