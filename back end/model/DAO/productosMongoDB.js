import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {

    constructor() {
    }

    obtenerProductos = async id => {
        if(!CnxMongoDB.connectOk) return id? {} : []
        if(id) {
            //const producto =  await Promise.resolve({})
            const producto = await CnxMongoDB.db.collection('productos').findOne({_id: new ObjectId(id)})
            return producto || {}
        }
        else {
            //return await Promise.resolve([])
            const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
            return productos
        }
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connectOk) return {}
        await CnxMongoDB.db.collection('productos').insertOne(producto)
        return await Promise.resolve(producto)
    }

    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connectOk) return {}

        return await Promise.resolve(producto)
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connectOk) return {}
        const productoEliminado = await this.obtenerProductos(id)
        await CnxMongoDB.db.collection('productos').deleteOne({_id: new ObjectId(id)})
        return await productoEliminado
    }
}

export default ModelMongoDB