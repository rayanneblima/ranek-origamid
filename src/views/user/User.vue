<template>
  <section class="user">
    <nav class="sidenav">
      <!-- ProductsPagination.vue sem scoped nos styles, reaproveitando aqui -->
      <ul>
        <li>
          <router-link :to="{name: 'usuario'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'compras'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'vendas'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'usuario-editar'}">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="logout">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "User",
  components: {},
  methods: {
    logout () {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
</style>
