const { describe } = require('yargs');

const argv = require('yargs')
.option('n', {
    alias:'numero',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type:'boolean',
    default: false,
    describe: 'muestra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'limite de la multiplicacion'
})
.check( (argv, options)=>{
    if(isNaN(argv.n)){
        throw 'La base tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;