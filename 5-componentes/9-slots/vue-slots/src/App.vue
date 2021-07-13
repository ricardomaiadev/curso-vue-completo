<template>
  <div id="app">
    <modal-principal>
      <template #header>
        <p>Esse é o header</p>
      </template>
      <template #default>
        <p>Esse é um teste</p>
        <button>Comprar</button>
      </template>
      <template #footer>
        <p>Esse é o footer</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue';
export default {
  components: {
    ModalPrincipal,
  },
};
</script>

<style>
</style>
