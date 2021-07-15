<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'ModalPrincipal',
  data() {
    return {
      logo: "Techno",
      user: {
        nome: "Ricardo"
      }
    }
  },
};
</script>
<style>
</style>