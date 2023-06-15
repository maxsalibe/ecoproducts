import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://6477d841362560649a2d004b.mockapi.io/api',  // Completar con el Url de la Api que usemos
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    
    async listar(){
        try{
            const response = await apiClient.get('/producto') 
            return response.data
        }catch (error){
            throw "Error de conexion con la API"
        }
    },

    async crear(producto){
        try{
            await apiClient.post('/producto', producto) 
        
        }catch(error){
        throw "Error de conexion"
    }
    },
    async eliminar(idProducto) {
        try {
            await apiClient.delete("/producto/:id" + id) 
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async actualizar(id, elem) {
        try {
            await apiClient.put("/producto/:id" + id, elem) 
        } catch (error) {
            throw "Error de conexion"
        }
    },   

}