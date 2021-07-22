<template>
    <div>
        <h1>Curso ativo: {{curso}}</h1>
        <router-link :to="{ name: 'curso', params: { curso: 'javascript'}}">JavaScript</router-link>
        <router-link :to="{ name: 'curso', params: { curso: 'html'}}">HTML</router-link>
        <router-link :to="{ name: 'curso', params: { curso: 'css'}}">CSS</router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    props: ["curso"],
    created() {
        console.log("Esse componente foi criado");
    },
    beforeRouteUpdate(to, from, next) {
        next();
    }
};
</script>

<style>

</style>