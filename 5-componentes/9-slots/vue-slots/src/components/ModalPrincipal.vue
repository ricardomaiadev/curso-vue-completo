<template>
  <div class="modal">
    <slot name="header"></slot>
    <h1>Esse é o modal</h1>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'ModalPrincipal',
};
</script>
<style>
</style>