<template>
    <div>
        <h1>{{curso}}</h1>
        <router-link :to="{name: 'descricao'}">Descrição</router-link>
        <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <transition mode="out-in" name="topDown">
      <router-view :key="curso"></router-view>
    </transition>
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

.topDown-enter,
.topDown-leave-to {
  transform: translate3d(0, -40px, 0) scale(0.2);
  opacity: 0;
}

.topDown-enter-active,
.topDown-leave-active {
  transition: all 0.3s;
}

</style>