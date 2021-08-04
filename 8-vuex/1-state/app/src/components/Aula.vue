<template>
    <div>
        <p>Aula {{totalAulas}}, esse é o usuário: {{user}} , {{aulasCompletas}} </p>
        <button @click="mostrarConsole"> Mostrar no Console</button>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            totalAulas: 25,
            nome: "Ricardo",
        }
    },
    computed: {
        ...mapState(["user", "aulasCompletas"]),
        nomeMaisculo() {
            return this.nome.toUpperCase();
        }
    },
    methods: {
        handleClick() {
            console.log(this.user)
        }
    }
}
</script>

<style>

</style>