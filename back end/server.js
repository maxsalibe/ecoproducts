import express from 'express'
import RouterProductos from './router/productos.js'
import RouterUsuarios from './router/usuarios.js'
import RouterCarrito from './router/carrito.js'
import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ------------------------------------------
//          API REST Ful : Productos
// ------------------------------------------
app.use('/api/productos', new RouterProductos().start())
app.use('/api/usuarios', new RouterUsuarios().start())
//app.use('/api/carrito', new RouterCarrito().start())

//-------------------------------------------
//      Listen del servidor express
//-------------------------------------------

await CnxMongoDB.conectar()


const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://127.0.0.1:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))


