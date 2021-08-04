<template>
    <div>
        <p>Aluno {{aulasCompletas}}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["aulasCompletas"])
    }
    
}
</script>


<style>

</style>