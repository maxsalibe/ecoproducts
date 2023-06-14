import express from 'express'
import Controlador from '../controlador/usuarios.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }
    
}

export default Router