import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {

    constructor() {
    }
    obtenerUsuarios= async id => {
        if(!CnxMongoDB.connectOk) return id? {} : []
        if(id) {
            const usuario =  await Promise.resolve({})
            return usuario || {}
        }
        else {
            //return await Promise.resolve([])
            const usuarios = await CnxMongoDB.db.collection('usuarios').find({}).toArray()
            return usuarios
        }
    }

    guardarUsuario = async usuario => {
        if(!CnxMongoDB.connectOk) return {}

        return await Promise.resolve(usuario)
    }

    actualizarUsuario = async (id, usuario) => {
        if(!CnxMongoDB.connectOk) return {}

        return await Promise.resolve(usuario)
    }

    borrarUsuario = async id => {
        if(!CnxMongoDB.connectOk) return {}

        return await Promise.resolve({})
    }
}

export default ModelMongoDB