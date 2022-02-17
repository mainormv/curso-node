const argv = require('yargs')(process.argv.slice(2))
.options({
    'base': {
      alias: 'b',
      describe: 'base de la tabla a generar',
      demandOption: true,
      type: 'number'
    },
    'show': {
      alias: 's',
      describe: 'Muestra el resultado en consola',
      type: 'boolean',
      default: false
    },
    'hasta': {
      alias: 'h',
      describe: 'Indica hasta cuanto debe multiplicar',
      type: 'number',
      default: 10
    }
  })
  .check((argv, options) => {
    if ( isNaN(argv.base) ) {
      throw new Error("Solamente se permiten numeros en parametro base")
    }
    else
    if ( argv.show.toString() != 'true' &&  argv.show.toString() != 'false') {
        throw new Error("Solamente se permiten booleanos en parametro show")
      }
    else{
      return true 
    }
  })
  .argv;

  module.exports = argv;