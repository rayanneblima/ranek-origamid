<template>
  <section>
    <h2>Adicionar Produto</h2>
    <AddProduct />
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="produto, index in usuario_produtos" :key="produto.id + index">
        <ProductItem :product="produto">
          <p>{{ produto.descricao }}</p>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapActions} from "vuex";
import AddProduct from "@/components/AddProduct.vue";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "UserProducts",
  components: { AddProduct, ProductItem },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  methods: {
    ...mapActions(["getUserProducts"])
  },
  watch: {
    login () {
      this.getUserProducts()
    }
  },
  created () {
    if (this.login) this.getUserProducts()
  }
}
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
  transition: all .3s;
}
</style>>
