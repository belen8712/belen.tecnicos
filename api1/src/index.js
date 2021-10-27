const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//aca obtengo toda la funcionalidad de express, depositade en la costante serve
 const server = express()
 

 //especificamos el formato de datos que va a manipular nuestro servidor, es decir, nuestra API
 server.use(express.json())
  
 //nos va a permitir comunicar al cliente el servidor, viceversa
 server.use(cors())
 
 //nos va a modificar en la consola, cada vez que haga peticion HTTP(put,delete,post,get)
  server.use(morgan('dev'))

 //Setiamos puerto disponible en el sistema
 server.set('port', process.env.PORT || 3000)

 //poner las rutas del routecliente
 server.use(require('./routes/cliente.route'))
 server.use(require('./routes/producto.route'))

 // le damos arranque a nuestro servidor
 server.listen(server.get ('port') )

 console.log(`servidor corriendo en el puerto ${server.get('port')}`)

