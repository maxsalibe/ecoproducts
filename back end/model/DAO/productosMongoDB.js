import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {

    constructor() {
    }

    obtenerProductos = async id => {
        if(!CnxMongoDB.connectOk) return id? {} : []
        if(id) {
            const producto =  await Promise.resolve({})
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

        return await Promise.resolve(producto)
    }

    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connectOk) return {}

        return await Promise.resolve(producto)
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connectOk) return {}

        return await Promise.resolve({})
    }
}

export default ModelMongoDB