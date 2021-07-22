<template>
    <div>
        <h1>{{curso}}</h1>
        <router-link :to="{name: 'descricao'}">Descrição</router-link>
        <router-link :to="{name: 'aulas'}">Aulas</router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    props: ["curso"],
    methods: {
        puxarDados() {
            console.log("Puxei Api");
        }
    },
    beforeRouteEnter(to, from, next) {
        // this.puxarDados();
        next( (vm) => {
            vm.puxarDados();
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.puxarDados();
        next();
    },
    beforeRouteLeave(to, from, next) {
        const confirmar = confirm("Você deseja sair?");
        if(confirmar) next(); 
    }
};
</script>

<style>

</style>