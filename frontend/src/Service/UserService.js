import axios from 'axios'
const apiClient = axios.create({
    baseURL: '',  // Completar con el Url de la Api que usemos
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {


    async crear(user){
        try{
            await apiClient.post('/', user) // completar
        
        }catch(error){
        throw "Error de conexion"
    }
    },

    async actualizar(id, user) {
        try {
            await apiClient.put("/" + id, user) // completar
        } catch (error) {
            throw "Error de conexion"
        }
    },
}