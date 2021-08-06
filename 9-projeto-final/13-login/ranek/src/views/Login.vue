<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="email">E-mail</label>
            <input type="text" name="email" id="email" v-model="login.email">
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="login.senha">
            <button class="btn" @click.prevent="logar">Logar</button>
        </form>
        <p class="perdeu">
            <a href="/" target="_blank"> Perdeu a senha? Clique aqui. </a>
        </p>
        <LoginCriar />
    </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue"

export default {
    data() {
        return {
            login: {
                email: "",
                senha: ""
            }
        }
    }
}
</script>

<style>

</style>