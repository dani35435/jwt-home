import client from "@/api/client";
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const ACCESS_TOKEN = 'AccessToken';
const REFRESH_TOKEN = 'refreshToken';

const store = new Vuex.Store({
    state: {
        accessToken: null,
        refreshToken: null,
    },
    mutations: {
        loginUser(state, params) {
            client.post('auth/login', {
                'email': params.email,
                'password': params.password,
            }).then(r => {
                localStorage.setItem(ACCESS_TOKEN, r.data.accessToken)
                localStorage.setItem(REFRESH_TOKEN, r.data.refreshToken)
            }).catch(err => {
                console.log(err)
            })
        },
        registerUser(state, params) {
            client.post('auth/register', {
                'name': params.name,
                'email': params.email,
                'password': params.password,
                'password_confirmation': params.password_confirmation,
            }).then(r => {
                localStorage.setItem(ACCESS_TOKEN, r.data.accessToken)
            }).catch(err => {
                console.log(err)
            })
        },
        logout() {
            localStorage.removeItem(ACCESS_TOKEN)
        },

        auth(accessToken) {
            console.log('Auth')
            localStorage.setItem(ACCESS_TOKEN, accessToken)
        },
        unAuth() {
            localStorage.removeItem(ACCESS_TOKEN)
        },
    },
    getters: {
        LoggedIn: state => !!state.accessToken,
    }
})

export default store


