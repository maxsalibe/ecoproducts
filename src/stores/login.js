import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, usuario: { email: '', permissions: [], tipoUsuario:'' }}
    },
    getters: {

    },
    actions: {
        logout() {
            this.isLogin = false
            this.usuario = { email: '', permissions: [] }
        },

        login(usuario) {
            
            this.isLogin = true
            this.usuario = usuario
            this.tipoUsuario = usuario.tipoUsuario
            sessionStorage.setItem('userInfo', JSON.stringify(usuario));
            // sessionStorage.setItem('tipoUsuario', this.tipoUsuario);
            // sessionStorage.setItem('nombreUsuario', this.user.split("@").shift())

        },
        havePermissions(access) {
            return this.usuario.permissions.filter(p => p == access).length > 0 ?  true: false
        }
    },
})