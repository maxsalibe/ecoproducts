import config from '../config.js'
import ModelMongoDB from "../model/DAO/productosMongoDB.js"
import {validar, validarBorrado} from "../validaciones/productos.js"

class Servicio {

    constructor() {
        this.model = new ModelMongoDB()
    }

    obtenerProductos = async id => {
        const productos = await this.model.obtenerProductos(id)
        return productos
    }

     guardarProducto = async producto => {
        //const res = validar(producto)
       /*  if(res.result) {
            const productoGuardado = await this.model.guardarProducto(producto)
            return productoGuardado  
        } else {
          throw res.error
        }*/
        const productoGuardado = await this.model.guardarProducto(producto)
        return productoGuardado
    } 

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const res = validarBorrado(producto)
        const productoBorrado = await this.model.borrarProducto(id)
        return productoBorrado
    }
}


export default Servicio