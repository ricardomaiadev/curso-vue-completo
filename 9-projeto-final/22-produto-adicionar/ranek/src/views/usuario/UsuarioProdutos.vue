<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar/>
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{produto.descricao}}</p>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar"
import ProdutoItem from "@/components/ProdutoItem"
import { mapState, mapActions } from "vuex";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutoAdicionar,
    ProdutoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"])
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    }
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  }
};
</script>

<style scoped>

h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

</style>
