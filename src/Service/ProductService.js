import axios from 'axios'
const apiClient = axios.create({
    baseURL: '',  // Completar con el Url de la Api que usemos
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {

    
    async listar(){
        try{
            const response = await apiClient.get('/') // completar
            return response.data
        }catch (error){
            throw "Error de conexion con la API"
        }
    },

    async crear(producto){
        try{
            await apiClient.post('/', producto) // completar
        
        }catch(error){
        throw "Error de conexion"
    }
    },
    async eliminar(idProducto) {
        try {
            await apiClient.delete("/" + id) // completar
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async actualizar(id, elem) {
        try {
            await apiClient.put("/" + id, elem) // completar
        } catch (error) {
            throw "Error de conexion"
        }
    },



    

}