<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutoBuscar />
    <ProdutoListar />
  </section>
</template>

<script>
import ProdutoBuscar from '@/components/ProdutosBuscar.vue';
import ProdutoListar from '@/components/ProdutosListar.vue';
export default {
  name: 'Home',
  components: {
    ProdutoBuscar,
    ProdutoListar,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
