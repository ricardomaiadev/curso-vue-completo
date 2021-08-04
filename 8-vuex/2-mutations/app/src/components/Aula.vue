<template>
    <div>
        <p>Aula {{totalAulas}}, esse é o usuário: {{user}} , {{aulasCompletas}} </p>
        <button @click="handleClick"> Modificar usuário</button>
        <button @click="COMPLETAR_AULA"> Completar</button>
        <input type="text" v-model="novoUser">
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
            totalAulas: 25,
            nome: "Ricardo",
            novoUser: "",
        }
    },
    computed: {
        ...mapState(["user", "aulasCompletas"]),
        nomeMaisculo() {
            return this.nome.toUpperCase();
        }
    },
    methods: {
        ...mapMutations([ "CHANGE_USER", "COMPLETAR_AULA" ]),
        handleClick() {
            this.CHANGE_USER({
                user: this.novoUser,
                totalAulas: this.totalAulas
            });
        },
    }
}
</script>

<style>

</style>