<template>
    <h1 @click="navegarCursos">Essa é a Home</h1>
</template>

<script>
export default {
    methods: {
        navegarCursos() {
            setTimeout(() =>{
                this.$router.push("acoes");
            }, 1000)
        }
    }
}
</script>

<style>

</style>