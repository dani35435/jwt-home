import HomePage from "@/components/HomePage.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import TestSecure from "@/components/TestSecure.vue";


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/TestSecure',
        name: 'TestSecure',
        component: TestSecure,
        meta: {
            requiresAuth: true
        }
    }
]

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
