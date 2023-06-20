import express from 'express'
import Controlador from '../controlador/usuarios.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }
    
    start() {
        this.router.get('/:id?', this.controlador.obtenerUsuarios)
        this.router.post('/', this.controlador.guardarUsuario)
        this.router.put('/:id', this.controlador.actualizarUsuario)
        this.router.delete('/:id', this.controlador.borrarUsuario)

        return this.router
    }    
}

export default Router