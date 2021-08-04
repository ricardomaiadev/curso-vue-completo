<template>
  <div id="app">
    {{$store.state.user}}
    <User />
    <Curso />
  </div>
</template>

<script>
import User from "@/components/User.vue"
import Curso from "@/components/Curso.vue"

export default {
  name: 'App',
  components: {
    User,
    Curso,
  }
}
</script>

<style>

</style>
