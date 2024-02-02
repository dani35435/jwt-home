<template>
    <v-app>
        <v-app-bar
            app
            color="red"
        >
            <v-app-bar-title>
                <router-link to="/">
                    <h3 class="text-h4 white--text">Test</h3>

                </router-link>

            </v-app-bar-title>
            {{this.$store.accessToken}}
            <span v-if="this.$store.accessToken">
                 <button @click="logout">Выход</button>
            </span>
            <span v-else>

            <router-link to="/SignIn">Вход</router-link>
            <router-link to="/SignUp">регистация</router-link>
            </span>


        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>


export default {
    name: 'App',
    methods: {
        logout() {
            console.log(this.$store.accessToken)
            this.$store.commit('logout')
            this.$router.replace('SignIn')
        },
    },
}
</script>
