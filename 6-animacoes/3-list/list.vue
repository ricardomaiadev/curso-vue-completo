<template>
    <div>
        <transition-group tag="ul">
            <li v-for="(produto, index) in carrinho" :key="produto.nome">
                <p>{{produto.nome}}</p>
                <p>{{produto.preco}}</p>
                <button @click="remover(index)">Remover</button>
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
    data() {
        return {
            carrinho: [
                {
                    nome: "Notebook",
                    preço: 2399
                },
                {
                    nome: "Smartphone",
                    preço: 1399
                }
            ]
        }
    },
    methods: {
        remover(index) {
            this.carrinho.splice(index, 1);
        }
    }
}
</script>

<style>

.v-enter-active,
.v-leave-active {
    transition: all 0.3s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
}

</style>