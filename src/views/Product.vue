<template>
  <section>
    <div v-if="product" class="product">
      <ul v-if="product.fotos" class="images">
        <li v-for="image, index in product.fotos" :key="index">
          <img :src="image.src" :alt="image.titulo">
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="price">{{ product.preco | numberPrice }}</p>
        <p class="description">{{ product.descricao }}</p>
        <transition  mode="out-in" v-if="product.vendido === 'false'">
          <button class="btn" v-if="!finish" @click="finish = true">Comprar</button>
          <Checkout v-else :produto="product" />
        </transition>
        <button class="btn" v-else disabled>Produto Vendido</button>
      </div>
    </div>
    <Loading v-else />
  </section>
</template>

<script>
import { api } from '@/services.js'
import Checkout from '@/components/Checkout'

export default {
  name: "Product",
  components: { Checkout },
  props: ["id"],
  data() {
    return {
      product: null,
      finish: false
    };
  },
  methods: {
    getProduct() {
      this.product = null;
      api.get(`/produto/${this.id}`)
         .then((res) => (this.product = res.data));
    },
  },
  created() {
    this.getProduct()
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 900px;
  padding: 60px 20px;
}

.price {
  color: #e80;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
