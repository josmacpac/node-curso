const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');




console.clear();


/* //const numero = 7; */
crearArchivo(argv.n, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));



