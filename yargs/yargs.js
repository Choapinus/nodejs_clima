const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad a obtener el clima',
            demand: true
        }
    })
    .argv;

module.exports = {
    argv
}