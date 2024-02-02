<script>
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        };
    },
    methods: {
        registerUser() {
            console.log(this.$store)
            this.$store.commit('registerUser', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
        },
    },
};
</script>

<template>
    <v-container>
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="registerUser">
                <v-text-field variant="underlined" v-model="name" label="Имя"></v-text-field>
                <v-text-field variant="underlined" v-model="email" label="Почта"></v-text-field>
                <v-text-field variant="underlined" v-model="password" label="Пароль"></v-text-field>
                <v-text-field variant="underlined" v-model="password_confirmation" label="повторите пароль"></v-text-field>

                <v-btn type="submit" color="primary" block class="mt-2">Регистрация</v-btn>
            </v-form>
            <div class="mt-2">
                <p class="text-body-2">
                    Есть аккаунт? <a href="/SignIn">Войти</a>
                </p>
            </div>
        </v-sheet>
    </v-container>
</template>

<style scoped>

</style>
