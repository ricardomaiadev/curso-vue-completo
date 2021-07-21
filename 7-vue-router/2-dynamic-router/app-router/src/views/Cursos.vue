<template>
    <div>
        <h1>Curso ativo: {{curso}}</h1>
        <router-link to="/cursos/javascript">JavaScript</router-link>
        <router-link to="/cursos/html">HTML</router-link>
        <router-link to="/cursos/css">CSS</router-link>
    </div>
    
</template>

<script>
export default {
    computed: {
        curso() {
            return this.$route.params.curso;
        }
    }
}
</script>

<style>

</style>