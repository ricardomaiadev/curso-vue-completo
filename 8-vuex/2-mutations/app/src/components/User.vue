<template>
    <p>User {{aulasCompletas}}</p>
</template>

<script>
export default {
    computed: {
        aulasCompletas() {
            return this.$store.state.aulasCompletas;
        }
    }
}
</script>

<style>

</style>