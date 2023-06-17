import Servicio from '../servicio/usuarios.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerUsuarios = async (req,res) => {
        const { id } = req.params
        const usuarios = await this.servicio.obtenerUsuarios(id)
        res.json(usuarios)
    }

    guardarUsuario = async (req, res) => {
        try {
            const usuario = req.body
            const usuarioGuardado = await this.servicio.guardarUsuario(usuario)
            res.json(usuarioGuardado)
        } catch(error) {
            res.json({error: error.message})
        }
    }

    actualizarUsuario = async (req, res) => {
        const id = Number(req.params.id)
        const usuario = req.body

        const usuarioActualizado = await this.servicio.actualizarUsuario(id,usuario)
        
        res.json(usuarioActualizado)

    }

    borrarUsuario = async (req, res) => {
        const id = Number(req.params.id)
        const usuarioBorrado = await this.servicio.borrarUsuario(id)
        res.json(usuarioBorrado)
    }
}  

export default Controlador