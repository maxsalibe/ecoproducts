import ModelMongoDB from "../model/DAO/usuariosMongoDB.js"
import config from '../config.js'

class Servicio {

    constructor() {
        this.model = new ModelMongoDB()
    }

    obtenerUsuarios = async id => {
        const usuarios = await this.model.obtenerUsuarios(id)
        return usuarios
    }

     guardarUsuario = async usuario => {
        //const res = validar(usuario)
        if(res.result) {
            const usuarioGuardado = await this.model.guardarUsuario(usuario)
            return usuarioGuardado
        } else {
            throw res.error
        }
    } 

    actualizarUsuario = async (id, usuario) => {
        const usuarioActualizado = await this.model.actualizarUsuario(id, usuario)
        return usuarioActualizado
    }

    borrarUsuario = async id => {
        const usuarioBorrado = await this.model.borrarUsuario(id)
        return usuarioBorrado
    }

}


export default Servicio