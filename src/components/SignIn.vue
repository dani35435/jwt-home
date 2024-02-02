<script>
export default {
    name: "SignIn",
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        loginUser() {
            console.log(this.$store)
            this.$store.commit('loginUser', {email: this.email, password: this.password})
            this.$router.replace('/')
        },
    },
}
</script>

<template>
    <v-container>
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="loginUser">
                <v-text-field v-model="email" label="Почта"></v-text-field>
                <v-text-field variant="underlined" v-model="password" label="пароль"></v-text-field>
                <v-btn type="submit" color="primary" block class="mt-2">Войти</v-btn>
            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Еще нет аккаунта? <a href="/SignUp">Зарегистрироваться</a></p>
            </div>
        </v-sheet>
    </v-container>
</template>

<style scoped>

</style>
