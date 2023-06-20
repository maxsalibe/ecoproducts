import Joi from "joi"

export const validar = producto => {

    const productoSchema = Joi.object({
        producto: Joi.string().required(),
        precio: Joi.number().min(100).max(10000000).required(),
        stock: Joi.number().integer().min(0).max(999).required(),
        descripcion: Joi.string().required()
    })
    
    const { error } = productoSchema.validate(producto);
    if(error) {
        return { result: false, error }     // validación falló
    }

    return { result: true }     // validación ok
}

export const validarBorrado = producto =>{
    const productoBorrarSchema = Joi.object({
        precio: Joi.number().equal([0])
    })

    const { error } = productoBorrarSchema.validate(producto);
    if(error) {
        return { result: false, error }     // validación falló
    }

    return { result: true }     // validación ok
}