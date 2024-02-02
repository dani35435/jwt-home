import Vue from 'vue'
import vuetify from "@/plugins/vuetify.js";
import App from "@/App.vue"
import router from "@/router.js";
import store from "@/store/user";

const app = new Vue({
    router,
    vuetify,
    store: store,
    render: h => h(App)
})
app.$mount('#app')
