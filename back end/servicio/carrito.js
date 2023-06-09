import ModelFactory from "../model/DAO/carritoFactory.js"
import config from '../config.js'

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }


}


export default Servicio