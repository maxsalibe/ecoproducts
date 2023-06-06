import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, user: { email: '', permissions: [] } }
    },
    getters: {

    },
    actions: {
        logout() {
            this.isLogin = false
            this.user = { email: '', permissions: [] }
        },
        login(user) {
            this.isLogin = true
            this.user = user
        },
        havePermissions(access) {
            return this.user.permissions.filter(p => p == access).length > 0 ?  true: false
        }
    },
})